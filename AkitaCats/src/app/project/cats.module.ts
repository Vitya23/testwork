import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatsService } from './state/cats.service';

import { HttpClientModule } from '@angular/common/http';

import { TableComponent } from './pages/table-page/table.component';
import { CatComponent } from './shared/components/cat/cat.component';
import { CatsComponent } from './shared/components/cats/cats.component';
import { MasonryComponent } from './pages/masonry-page/masonry.component';




@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule,HttpClientModule,FormsModule,SharedModule
  ],
  providers:[CatsService],
  declarations: [TableComponent,MasonryComponent,CatsComponent,CatComponent]
})
export class CatsModule { }
