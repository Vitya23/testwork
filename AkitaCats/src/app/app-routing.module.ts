import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MasonryComponent } from './project/pages/masonry-page/masonry.component';
import { TableComponent } from './project/pages/table-page/table.component';




const routes: Routes =[
  { path: '', redirectTo: '/masonry', pathMatch: 'full' },
  { path: 'masonry', component: MasonryComponent },
  { path: 'table', component: TableComponent },
  {path:'menu',loadChildren:()=>
  import('./project/menu/menu.module').then((m)=> m.MenuModule)
}
]
@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{
      preloadingStrategy:PreloadAllModules,
    }),
  ],
  
  exports:[RouterModule]
})
export class AppRoutingModule { }
