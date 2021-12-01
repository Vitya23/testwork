import { Injectable } from '@angular/core';
import { VISIBILITY_FILTER } from './../filter/filter.model';
import { createTodo, Todo } from './todo.model';
import { TodoStore } from "./todo.store";

@Injectable({
  providedIn: 'root',
})

export class TodoService {
  constructor(private todoStore: TodoStore) {}

  
  add(title: string) {
    const todo = createTodo(title);
    this.todoStore.add(todo);
  }
  delete(id:string){
    this.todoStore.remove(id)
  }
  complete({id,completed}:Todo){
    this.todoStore.update(id,{completed})
  }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todoStore.update({
      ui: {
        filter
      }
    });
  }
}