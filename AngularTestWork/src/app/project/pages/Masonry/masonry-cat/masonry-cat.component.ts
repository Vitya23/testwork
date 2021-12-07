import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/project/shared/base.service';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CATS } from '../../../state/cats.model';

@Component({
  selector: 'app-cat',
  templateUrl: './masonry-cat.component.html',
  styleUrls: ['./masonry-cat.component.scss'],
})
export class CatComponent implements OnInit, OnDestroy {
  @Input() cat: CATS;
  @Output() complete = new EventEmitter<any>();
  control: FormControl;
  controlSub: Subscription;

  constructor() {}

  ngOnInit() {
    this.control = new FormControl(this.cat.like);
    this.controlSub = this.control.valueChanges.subscribe((like: boolean) => {
      this.complete.emit({ ...this.cat, like });
    });
  }
  ngOnDestroy() {
    this.controlSub.unsubscribe();
  }
}
