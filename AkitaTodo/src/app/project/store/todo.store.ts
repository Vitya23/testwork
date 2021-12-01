import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { VISIBILITY_FILTER } from "../filter/filter.model";
import { Todo } from "./todo.model";

export interface TodosState extends EntityState<Todo>{
    ui: {
        filter: VISIBILITY_FILTER;
      };
}
const createInitialState = {
    ui: {filter: VISIBILITY_FILTER.SHOW_ALL}
}
@Injectable({
  providedIn: 'root'
})
@StoreConfig({name:'todo'})
export class TodoStore extends EntityStore<TodosState>{
    constructor(){
        super(createInitialState)
    }
}