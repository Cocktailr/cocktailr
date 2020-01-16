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
    path: 'cocktails/cocktail',
    loadChildren: () => import('./cocktails/cocktail/cocktail.module').then( m => m.CocktailPageModule)
  },
  {
    path: 'functions/add',
    loadChildren: () => import('./functions/add/add.module').then( m => m.AddPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
