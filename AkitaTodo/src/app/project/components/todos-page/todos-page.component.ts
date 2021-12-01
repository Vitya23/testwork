import { initialFilters, VISIBILITY_FILTER } from './../../filter/filter.model';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../store/todo.service';
import { Observable } from 'rxjs';
import {  TodoQuery } from '../../store/todo..query';
import { Todo } from '../../store/todo.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {
  todos$: Observable<Todo[]>
  activeFilter$: Observable<VISIBILITY_FILTER>;
  filters = initialFilters;
  form: FormGroup;
  constructor(public todosQuery:TodoQuery,public todosService:TodoService) { }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;

    this.form = new FormGroup({
      input: new FormControl(null, Validators.required),
    });
  }



  add(input: HTMLInputElement) {
    if(this.form.invalid){
      return
    }
    this.todosService.add(input.value);
    this.form.reset()
  }

  delete(id: string) {
    this.todosService.delete(id);
  }
  complete(todo:Todo){
    this.todosService.complete(todo)
  }
  changeFilter(filter: VISIBILITY_FILTER) {
    this.todosService.updateFilter(filter);
  }

}
