import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { CameraService } from 'src/app/services/camera.service';
import { Cocktail } from '../classes/cocktail';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private db: AngularFirestore, private afs: AngularFireStorage, private cameraService: CameraService) {

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
      this.db.collection('cocktails').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  getCocktail(cocktailKey) {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('cocktails').doc(cocktailKey).snapshotChanges()
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
  updateCocktail(cocktailKey, cocktail) {
    return this.db.collection('cocktails').doc(cocktailKey).update({
      name: cocktail.name,
      imgUrl: cocktail.imgUrl,
      description: cocktail.description
    });
  }

  //deletes a Cocktail
  deleteCocktail(cocktailKey) {
    return this.db.collection('cocktails').doc(cocktailKey).delete();
  }
}
