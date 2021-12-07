import { map } from 'rxjs/operators';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { BaseService } from 'src/app/project/shared/base.service';
import { CATS } from '../../../state/cats.model';
import { CatsService } from '../../../state/cats.service';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss'],
})
export class MasonryComponent implements OnInit, OnDestroy {
  constructor(public catsService: CatsService) {}
  cats: CATS[];
  catsSub: Subscription;
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
    console.log(cat);
    this.catsService.changeLike(cat);
  }
}
