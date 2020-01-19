import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocktailsFromProductPageRoutingModule } from './cocktails-from-product-routing.module';

import { CocktailsFromProductPage } from './cocktails-from-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocktailsFromProductPageRoutingModule
  ],
  declarations: [CocktailsFromProductPage]
})
export class CocktailsFromProductPageModule {}
