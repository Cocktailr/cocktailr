import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';
import { Cocktail } from 'src/app/classes/cocktail';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  private id;

  constructor(private cocktailService: CocktailsService) { }

  ngOnInit() {
  }

  delete(){
    this.cocktailService.deleteCocktail(this.id)
    .then(
      res => {
        document.getElementById("response").innerHTML =  "<h4>Successfully deleted Cocktail</h4>";
      },
      err => {
        document.getElementById("response").innerHTML =  "<h4>Couldn't delete Cocktail</h4>";
        console.log(err);
      }
    )
  }

}
