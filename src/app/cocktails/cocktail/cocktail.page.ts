import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.page.html',
  styleUrls: ['./cocktail.page.scss'],
})
export class CocktailPage implements OnInit {

  private cocktailId : string;

  constructor(private route: ActivatedRoute) {
    this.cocktailId = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {

  }

}
