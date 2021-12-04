import { CATS } from '../../state/cats.model';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import {  Subscription } from 'rxjs';
import { BaseService } from 'src/app/project/shared/base.service';

import { CatsService } from '../../state/cats.service';

@Component({
  selector: 'app-menu',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashBoardComponent implements OnInit,OnDestroy {
  searchStr= '';
  @Output() sendCat = new EventEmitter<any>();
  cats:CATS[]
  catsSub:Subscription
  constructor( public alert: BaseService,public catsService:CatsService) {}
  
  

  ngOnInit() {
    this.catsSub = this.catsService.getAll().subscribe((cats:any)=>{
      this.cats = cats
    })
    
  }
  ngOnDestroy(){
    this.catsSub.unsubscribe()
  }
 
  remove(id) {
  this.catsService.remove(id)
  this.alert.danger('Пост удалён')
  }



}
