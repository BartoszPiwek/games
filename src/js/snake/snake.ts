import { Position } from "./position";

export class Snake {

    position: Array<Position>;

    constructor(){
        this.reset();
    }

    /* Check collistion */
    collision(){

        // Eat yourself
        for (let i = 1; i < this.position.length; i++) {
            let position = this.position[i];

            if (this.position[0].x == position.x && this.position[0].y == position.y ) {
                return true;
            }
        }

        // Border
        if (this.position[0].y > 17 || this.position[0].y < 3 || this.position[0].x < 1 || this.position[0].x > 17) {
            return true;
        }

        return false;
    }

    /* Add position */
    add() {
        this.position.push( this.position[this.position.length - 1] );
    }

    /* Move last element to first new position */
    move( direction: string ) {

        let 
        position = this.position[0],
        positionNew = new Position(position.x, position.y);

        this.position.pop();
        
        switch ( direction ) {
            case 'left':
                positionNew.x--;
                break;
            case 'right':
                positionNew.x++;
                break;
            case 'up':
                positionNew.y--;
                break;
            case 'down':
                positionNew.y++;
                break;
            default:
                break;
        }

        this.position.unshift( positionNew );
    }

    reset() {
        this.position = [
            new Position(2, 10),
            new Position(1, 10),
        ]  
    }

}