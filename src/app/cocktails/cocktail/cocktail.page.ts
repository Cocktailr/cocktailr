import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.page.html',
  styleUrls: ['./cocktail.page.scss'],
})
export class CocktailPage implements OnInit {

  cocktail : any;
  average : number;
  stars : any;

  constructor() {
    this.cocktail = {
      name: "Cuba Libre",
      imgUrl: "https://images.7hauben.com/eyJidWNrZXQiOiI3aC1pbWFnZXMiLCJrZXkiOiJ3cC1jb250ZW50XC91cGxvYWRzXC8yMDE4XC8wM1wvY3ViYS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMjQsImZpdCI6ImNvdmVyIn19fQ==",
      description: "Cuba Libre ist ein Longdrink mit Rum und Cola, der um 1900 in Kuba entstand",
      creator: {
        name: "Alexander Stöckl"
      },
      ingredients: [
        {
          name: "rum"
        },
        {
          name: "cola"
        }
      ],
      steps: [
        {
          nr: 1,
          description: "Fill up the Glass with Ice"
        },
        {
          nr: 2,
          description: "Pour Lime Jusice and White Rum into the Glass"
        },
        {
          nr: 3,
          description: "Fill up the Glass with Cola"
        },
        {
          nr: 4,
          description: "Garnish with Lime Wedge"
        }
      ],
      reviews: [
        {
          uid: "asdfasdfasdf",
          name: "Alexander Stöckl",
          rating: 4.6,
          comment: "Good Job"
        }
      ]
    };
    this.average = this.getAverageRating(this.cocktail.reviews);
    this.stars = this.calculateStars(this.average);
   }

  ngOnInit() {

  }

  getAverageRating(reviews) {
    let counter = 0;
    let sum = 0;
    reviews.forEach(review => {
      sum += review.rating;
      counter++;
    });
    return sum / counter;
  }

  roundHalf(num) {
    return Math.round(num*2)/2;
  }

  calculateStars(average) {
    this.roundHalf(average);
    let emptyStars = 5 - average;
    emptyStars = Math.floor(emptyStars);

    let fullStars = average / 1;

    average - fullStars;
    let halfStars = average / 0.5;

    return {fullStars: fullStars, halfStars: halfStars, emptyStars: emptyStars};
  }

}
