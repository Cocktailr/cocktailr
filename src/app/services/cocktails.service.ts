import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { CameraService } from 'src/app/services/camera.service';
import { Cocktail } from '../classes/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private db: AngularFirestore, private afs: AngularFireStorage, private cameraService: CameraService) {

  }

  takePhoto() {
    let image = this.cameraService.takePhoto();
    this.afs.ref("cocktail").putString(image, "data_url");
  }


  //create a cocktail
  createCocktail(cocktail: Cocktail) {
    return this.db.collection('cocktails').add({
      name: cocktail.name,
      imgUrl: cocktail.imgUrl,
      description: cocktail.description
    });
  }

  //return all cocktails created from a user
  getCocktailsFromUser(user) {

  }

  //get The newest Cocktails for Homepage
  getNewestCocktails() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/cocktails').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  //gets a list of all Cocktails with a ingredient
  getCocktailsFromCategory() {

  }

  //search Cocktail 
  searchCocktail(searchValue) {
    return this.db.collection('cocktails',ref => ref.where('name', '>=', searchValue)
    .where('name', '<=', searchValue + '\uf8ff'))
    .snapshotChanges()
  }

  //updateCocktail
  updateCocktail(cocktailKey, cocktail: Cocktail) {
    return this.db.collection('cocktails').doc(cocktailKey).set(cocktail);
  }


  //deletes a Cocktail
  deleteCocktails(cocktailKey) {
    return this.db.collection('cocktails').doc(cocktailKey).delete();
  }

  
  
}
