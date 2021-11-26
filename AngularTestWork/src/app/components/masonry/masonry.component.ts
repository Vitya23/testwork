import { CATS } from './../../interface';
import { Component, Input, OnInit, Output } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss'],
})
export class MasonryComponent implements OnInit {
  constructor(public service: BaseService) {}

  ngOnInit(): void {}
}
