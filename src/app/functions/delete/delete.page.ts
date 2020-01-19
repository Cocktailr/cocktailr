import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { Cocktail } from 'src/app/classes/cocktail';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  cocktail: Cocktail;

  constructor(private cocktailService: CocktailsService) { }

  ngOnInit() {
  }

  delete(){
    this.cocktailService.deleteCocktails(this.cocktail)
    .then(
      res => {
        return "Successfuly deleted Cocktail";
      },
      err => {
        console.log(err);
      }
    )
  }

}
