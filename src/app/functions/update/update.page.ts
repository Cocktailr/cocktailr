import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { Cocktail } from "src/app/classes/cocktail";

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  public id;
  public name;
  public imgUrl;
  public description;

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit() {
  }

  update() {
    let cocktail = new Cocktail(this.name, this.imgUrl, this.description);
    this.cocktailsService.updateCocktail(this.id, cocktail)
    .then(
      res => {
        document.getElementById("response").innerHTML =  "<h4>Successfully updated Cocktail</h4>";
      },
      err => {
        document.getElementById("response").innerHTML =  "<h4>Couldn't update Cocktail</h4>";
        console.log(err);
      }
    )
  }

}
