import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/project/shared/base.service';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CATS } from '../../../state/cats.model';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit,OnDestroy {

@Input() cat:CATS
@Output() complete = new EventEmitter<any>();
  control: FormControl;
  controlSub:Subscription
  page:boolean
  constructor(private baseService:BaseService) { }

  ngOnInit() {
    this.page = this.baseService.page
    this.control = new FormControl(this.cat.like);
    this.controlSub = this.control.valueChanges.subscribe((like: boolean) => {
      console.log({...this.cat})
      this.complete.emit({ ...this.cat, like });
    })
    
  }
  ngOnDestroy(){
    this.controlSub.unsubscribe()
  }


}
