import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MasonryComponent } from './components/masonry/masonry.component';
import { TableComponent } from './components/table/table.component';
import { BaseService } from './base.service';

@NgModule({
  declarations: [AppComponent, MasonryComponent, TableComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/masonry', pathMatch: 'full' },
      { path: 'masonry', component: MasonryComponent },
      { path: 'table', component: TableComponent },
    ]),
    FormsModule,
  ],
  providers: [BaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
