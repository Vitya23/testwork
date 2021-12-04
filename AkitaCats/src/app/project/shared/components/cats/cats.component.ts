import { CATS } from '../../../state/cats.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  @Input() cats:CATS[]
  @Output() complete = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
   
  }
  

}
