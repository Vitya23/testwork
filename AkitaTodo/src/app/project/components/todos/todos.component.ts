import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../store/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() todos: Todo[];
  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<string>();

  trackByFn(index,todo) {
    return todo.id;
  }

}
