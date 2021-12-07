import { SharedModule } from './../shared/shared.module';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './dashboard-page/dashboard-page.component';

import { MenuLayoutComponent } from './menu-layout/menu-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashBoardComponent,
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./functional/functional.module').then((m) => m.FunctionalModule),
  },

  {
    path: ':id/edit',
    loadChildren: () =>
      import('./functional/functional.module').then((m) => m.FunctionalModule),
  },
];

@NgModule({
  declarations: [DashBoardComponent, MenuLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MenuModule {}
