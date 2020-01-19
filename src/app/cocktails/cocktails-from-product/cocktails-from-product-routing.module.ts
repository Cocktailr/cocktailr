import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocktailsFromProductPage } from './cocktails-from-product.page';

const routes: Routes = [
  {
    path: '',
    component: CocktailsFromProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocktailsFromProductPageRoutingModule {}
