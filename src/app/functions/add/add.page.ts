import { Component, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private cocktailsService: CocktailsService) { }

  ngOnInit() {

  }

  takePhoto() {
    this.cocktailsService.takePhoto();
  }

}
