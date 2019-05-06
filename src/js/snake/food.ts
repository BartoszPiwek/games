import { Position } from './position';

export class Food {
    position: Position;
    image: HTMLImageElement;

    constructor( ){
        this.position = new Position();
        this.image = new Image();
        this.image.src = "./images/food.png";
    }

    reset( positionNew: Position ){
        this.position = positionNew;
    }

    get drawImage(){
        return {
            image: this.image, 
            x: this.position.x, 
            y: this.position.y
        };
    }

}
