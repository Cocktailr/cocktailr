import { Component } from '@angular/core';
import { CocktailsService } from "src/app/services/cocktails.service";
import { Cocktail } from '../classes/cocktail';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cocktails : Array<any>;

  constructor(private cocktailService: CocktailsService) {
    this.cocktailService.getNewestCocktails()
    .then(result => {
      this.cocktails = result;
    })
  }


}
