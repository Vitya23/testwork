import { BaseService } from 'src/app/base.service';
import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(public service: BaseService) {}
  ngOnInit(): void {}
}
