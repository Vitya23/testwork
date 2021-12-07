import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [SearchPipe, TruncatePipe],
  imports: [CommonModule],
  exports: [SearchPipe, TruncatePipe],
})
export class SharedModule {}
