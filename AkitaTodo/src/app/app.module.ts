import { TodosModule } from './project/todos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { environment } from '../environments/environment';
import { TodosPageComponent } from './project/components/todos-page/todos-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos'
  },
  {
    path: 'todos',
    component: TodosPageComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodosModule,
    
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    RouterModule.forRoot(routes)
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
