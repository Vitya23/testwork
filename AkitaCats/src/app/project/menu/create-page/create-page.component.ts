import { BaseService } from 'src/app/project/shared/base.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatsService } from '../../state/cats.service';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  reg:string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  form:FormGroup

  constructor( public catsService:CatsService,private alert: BaseService) { }

  ngOnInit() {
    
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required,Validators.maxLength(11)]),
      description: new FormControl(null, [Validators.required,Validators.maxLength(100)]),
      photo: new FormControl(null, [Validators.required,Validators.pattern(this.reg)]),
    });
    
  }
  submit(){
    if(this.form.invalid){
      return
    }
    const cat:any = {
      title:this.form.value.title,
      description:this.form.value.description,
      photo:this.form.value.photo
    }
    this.catsService.add(cat)
    this.form.reset()
    this.alert.success('Пост создан')
    
  }

}
