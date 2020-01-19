import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  products : any;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'All Cocktails',
      url: '/cocktails',
      icon: 'wine'
    },
    {
      title: 'Add Cocktail',
      url: '/functions/add',
      icon: 'add'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    //private productsService: ProductsService
  ) {
    this.initializeApp();
    //this.getCategories();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 /* getCategories() {
    this.productsService.getProducts()
    .subscribe(result => {
      this.products = result;
    });
    this.setProductsToPages(this.appPages);
  }

  setProductsToPages(appPages) {

  }*/

}
