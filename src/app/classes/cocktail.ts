export class Cocktail {

    constructor(
        public name: string,
        public imgUrl: string,
        public description: string,
        public creator?: Object,
        public ingredients?: Array<Object>,
        public steps?: Array<Object>,
        public reviews?: Array<Object>
    ) {}

}

export interface ICocktail {
    name: string,
    imgUrl: string,
    description: string,
    creator?: Object,
    ingredients?: Array<Object>,
    steps?: Array<Object>,
    reviews?: Array<Object>
}