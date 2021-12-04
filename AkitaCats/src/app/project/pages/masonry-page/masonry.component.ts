import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/project/shared/base.service';
import { CATS } from '../../state/cats.model';
import { CatsQuery } from '../../state/cats.query';
import { CatsService } from '../../state/cats.service';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss'],
})


export class MasonryComponent implements OnInit {
  constructor(private catsQuery:CatsQuery, public baseService: BaseService,public catsService:CatsService) {}
  cats$:Observable<CATS[]>
  @Output() complete = new EventEmitter<CATS>();
  
  ngOnInit() {
    this.baseService.page = true
    this.cats$ = this.catsQuery.selectAll$
    }
    

  like(cat:CATS){
    this.catsService.changeLike(cat)
    
    
  }

}
