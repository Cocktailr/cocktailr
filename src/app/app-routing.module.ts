import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'cocktails',
    loadChildren: () => import('./cocktails/cocktails.module').then( m => m.CocktailsPageModule)
  },
  {
    path: 'cocktails/:id',
    loadChildren: () => import('./cocktails/cocktail/cocktail.module').then( m => m.CocktailPageModule)
  },
  {
    path: 'cocktails/:productName',
    loadChildren: () => import('./cocktails/cocktails-from-product/cocktails-from-product.module').then( m => m.CocktailsFromProductPageModule)
  },
  {
    path: 'functions/add',
    loadChildren: () => import('./functions/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'functions/update',
    loadChildren: () => import('./functions/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'functions/delete',
    loadChildren: () => import('./functions/delete/delete.module').then( m => m.DeletePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
