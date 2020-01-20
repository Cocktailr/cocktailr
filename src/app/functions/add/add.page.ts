import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { CameraService } from 'src/app/services/camera.service'
import { Cocktail } from "src/app/classes/cocktail";

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  private name;
  private imgUrl;
  private description;

  constructor(private cocktailsService: CocktailsService) {
   }

  ngOnInit() {
    
  }

  createCocktail() {
    let cocktail = new Cocktail(this.name, this.imgUrl, this.description);
    this.cocktailsService.createCocktail(cocktail)
    .then(
      res => {
        document.getElementById("response").innerHTML =  "<h4>Successfully created Cocktail</h4>";
      },
      err => {
        document.getElementById("response").innerHTML =  "<h4>Couldn't create Cocktail</h4>";
        console.log(err);
      }
    )
  }

}
