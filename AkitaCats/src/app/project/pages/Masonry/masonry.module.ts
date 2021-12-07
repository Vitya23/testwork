import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasonryComponent } from './masonry-layout/masonry.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CatComponent } from './masonry-cat/masonry-cat.component';
import { CatsService } from '../../state/cats.service';

@NgModule({
  declarations: [MasonryComponent, CatComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: MasonryComponent }]),
  ],
  providers: [CatsService],
})
export class MasonryModule {}
