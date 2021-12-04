import { BaseService } from 'src/app/project/shared/base.service';
import { Subscription } from 'rxjs';

import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit,OnDestroy {

  @Input() delay = 5000

  public text:string
  public type ='success'

  alSub: Subscription

  constructor(private alertService:BaseService) { }

  ngOnInit() {
    this.alertService.alert$.subscribe(alert=>{
      this.text = alert.text
      this.type = alert.type

      const timeout = setTimeout(()=>{
        clearTimeout(timeout)
        this.text = ''
      },this.delay)
    })
  }
  ngOnDestroy(){
    if(this.alSub){
      this.alSub.unsubscribe()
    }
  }
}
