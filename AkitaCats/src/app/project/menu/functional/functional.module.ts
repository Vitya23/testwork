import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FunctionalPageComponent } from './functional-page/functional-page.component';

@NgModule({
  declarations: [FunctionalPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FunctionalPageComponent,
      },
    ]),
  ],
})
export class FunctionalModule {}
