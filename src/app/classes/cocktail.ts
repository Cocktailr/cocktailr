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
