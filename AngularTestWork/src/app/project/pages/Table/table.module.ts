import { CatsService } from './../../state/cats.service';
import { TableComponent } from './table-layout/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableCatComponent } from './table-cat/table-cat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TableComponent, TableCatComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: TableComponent }]),
  ],
  providers: [CatsService],
})
export class TableModule {}
