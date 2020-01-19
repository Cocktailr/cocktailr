import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktails-from-product',
  templateUrl: './cocktails-from-product.page.html',
  styleUrls: ['./cocktails-from-product.page.scss'],
})
/**
 * shows all cocktails from the product example: vodka
 */
export class CocktailsFromProductPage implements OnInit {

  private productName : string;
  constructor(private route: ActivatedRoute) {
    this.productName = this.route.snapshot.paramMap.get("name");
   }

  ngOnInit() {
  }

}
