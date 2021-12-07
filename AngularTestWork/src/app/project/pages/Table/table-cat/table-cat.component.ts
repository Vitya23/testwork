import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CATS } from 'src/app/project/state/cats.model';
import { BaseService } from '../../../shared/base.service';

@Component({
  selector: 'app-table-cat',
  templateUrl: './table-cat.component.html',
  styleUrls: ['./table-cat.component.scss'],
})
export class TableCatComponent implements OnInit {
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
