import { BaseService } from 'src/app/base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
 
  constructor(public service: BaseService) {}
  ngOnInit() {}

  change(id: string) {
    this.service.changeLikes(id);
  }
  get(type: boolean) {
    return this.service.getLikes(type);
    
  }
}
