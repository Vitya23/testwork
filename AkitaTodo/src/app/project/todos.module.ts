import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodosPageComponent } from './components/todos-page/todos-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';



import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import { TodosFiltersComponent } from './filter/filter.component';
import { TodoService } from './store/todo.service';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule,ButtonModule,InputTextModule,DropdownModule ,CheckboxModule,BrowserAnimationsModule],
    exports: [TodosComponent],
    providers:[TodoService],
    declarations:[TodosPageComponent,TodosComponent, TodoComponent,TodosFiltersComponent]
})

export class TodosModule {}