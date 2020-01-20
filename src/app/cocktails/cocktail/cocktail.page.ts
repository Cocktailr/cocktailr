import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from "@angular/router";
import { CocktailsService } from 'src/app/services/cocktails.service';
import { ICocktail } from "src/app/classes/cocktail";

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.page.html',
  styleUrls: ['./cocktail.page.scss'],
})
export class CocktailPage implements OnInit {

  cocktailId : string;
  cocktail: any;

  constructor(private route: ActivatedRoute, private cocktailsService: CocktailsService) {

  }

  ngOnInit() {
    this.cocktailId = this.route.snapshot.paramMap.get("id");
    console.log(this.cocktailId)

    this.cocktailsService.getCocktail(this.cocktailId)
    .then(result => {
      this.cocktail = result.payload.data();
      console.log(this.cocktail);
    })
  }

}
