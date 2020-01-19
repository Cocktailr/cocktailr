import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { Cocktail } from "src/app/classes/cocktail";

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  private name;
  private imgUrl;
  private description;

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit() {
  }

  updateCocktail() {
    let cocktail = new Cocktail(this.name, this.imgUrl, this.description);
    this.cocktailsService.createCocktail(cocktail)
    .then(
      res => {
        return "Successfully updated Cocktail";
      }
    )
  }

}
