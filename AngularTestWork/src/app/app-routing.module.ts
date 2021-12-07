import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'masonry', pathMatch: 'full' },
  {
    path: 'masonry',
    loadChildren: () =>
      import('./project/pages/Masonry/masonry.module').then(
        (m) => m.MasonryModule
      ),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./project/pages/Table/table.module').then((m) => m.TableModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./project/menu/menu.module').then((m) => m.MenuModule),
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
