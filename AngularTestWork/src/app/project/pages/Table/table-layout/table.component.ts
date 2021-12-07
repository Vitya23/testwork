import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';

import { CATS } from '../../../state/cats.model';
import { CatsService } from '../../../state/cats.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  constructor(public catsService: CatsService) {}
  cats: CATS[];
  catsSub;
  @Output() complete = new EventEmitter<CATS>();

  ngOnInit() {
    this.catsSub = this.catsService.getAll().subscribe((cats: any) => {
      this.cats = cats;
    });
  }
  ngOnDestroy() {
    if (this.catsSub) {
      this.catsSub.unsubscribe();
    }
  }

  like(cat: CATS) {
    this.catsService.changeLike(cat);
  }
}
