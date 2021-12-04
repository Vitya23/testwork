import { SharedModule } from './../shared/shared.module';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePageComponent } from './create-page/create-page.component';
import { DashBoardComponent, } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

import { MenuLayoutComponent } from './menu-layout/menu-layout.component';



@NgModule({
  declarations: [
    CreatePageComponent,
    DashBoardComponent,
    EditPageComponent,
    MenuLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
      path:'',component: DashBoardComponent,},
        { path: 'create', component: CreatePageComponent },
        { path: ':id/edit', component: EditPageComponent },
      
      
    
    ])
  ],
  exports: [RouterModule],
})
export class MenuModule { }
