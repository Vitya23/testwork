import { BaseService } from 'src/app/project/shared/base.service';
import { Component, Input, OnInit } from '@angular/core';
import { CatsQuery } from '../../state/cats.query';
import { CATS } from '../../state/cats.model';
import { CatsService } from '../../state/cats.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
 
  constructor(private catsQuery:CatsQuery, public baseService: BaseService,public catsService:CatsService) {}
  @Input() cats: CATS[];
  @Input() cats$
  ngOnInit() {
    this.baseService.page = false
    this.cats$ = this.catsQuery.selectAll$
    
  }

  like(cat:CATS){
    this.catsService.changeLike(cat)
    
  }
}
