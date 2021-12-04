import { BaseService } from '../../shared/base.service';
import { CATS } from '../../state/cats.model';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { CatsService } from '../../state/cats.service';



@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit,OnDestroy {
  reg:string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  form:FormGroup
  cat:CATS
  catSub:Subscription
  
  constructor(private route:ActivatedRoute,private catsService:CatsService,private alert:BaseService) { }

  ngOnInit() {
    this.catSub = this.catsService.getById(this.route.snapshot.params.id).subscribe((cat:CATS)=>{
      this.cat = cat
      this.form = new FormGroup({
        title: new FormControl(cat.info.title, [Validators.required,Validators.maxLength(11)]),
        description: new FormControl(cat.info.description, [Validators.required,Validators.maxLength(100)]),
        photo: new FormControl(cat.info.photo, [Validators.required,Validators.pattern(this.reg)]),
        
      })
    })

    
  }
  ngOnDestroy(){
    this.catSub.unsubscribe()
  }
  submit(){
    if(this.form.invalid){
      return
    }
    this.catsService.update(this.cat.id, {
      title: this.form.value.title,
      description: this.form.value.description,
      photo: this.form.value.photo,
    })
    this.alert.success('Пост обновлён')
  }

}
