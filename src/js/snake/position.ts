export class Position {

    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    
    get position() {
        return {
            x: this.x,
            y: this.y,
        }
    }

    random(){
        this.x = Math.floor(Math.random() * 16 + 1 );
        this.y = Math.floor(Math.random() * 15 + 3 );
    }

}