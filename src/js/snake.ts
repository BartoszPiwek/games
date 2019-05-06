import { Food } from './snake/food';
import { Snake } from './snake/snake';
import { Position } from './snake/position';
import { Sound } from './sound';

class Game {

    private score: number;
    private hiscore: number;
    private snake: Snake;
    private ctx: CanvasRenderingContext2D;
    private food: Food;
    private background: HTMLImageElement;
    private box: number;

    private direction: string;
    private directionTemp: string;

    private sound: { [s: string]: Sound };
    
    constructor( input: any ) {

        this.score = 0;
        this.hiscore = 0;

        this.snake = input.snake;
        this.food = input.food;
        this.ctx = input.ctx;
        this.box = 32;

        this.direction;
        this.directionTemp;

        this.background = new Image();
        this.background.src = "/images/ground.png";

        this.sound = {
            "dead": new Sound('dead'),
            "down": new Sound('down'),
            "eat": new Sound('eat'),
            "left": new Sound('left'),
            "right": new Sound('right'),
            "up": new Sound('up'),
        };

        this.background.onload = () => {

            this.reset();
            this.draw();

            document.addEventListener('keydown', (event: KeyboardEvent) => {
                this.listenKeyboard( event );
            });

            this.start();
        };
    }

    private reset() {
        this.score = 0;
        this.snake.reset();
        this.direction = 'right';
        this.directionTemp = this.direction;
        this.placePoint();
    }

    private listenKeyboard( event: KeyboardEvent ) {

        let direction: string = this.direction; 

        if (event.keyCode == 37 && this.direction != 'right') {
            direction = "left";
        }
        else if (event.keyCode == 38 && this.direction != 'down') {
            direction = "up";
        }
        else if (event.keyCode == 39 && this.direction != 'left') {
            direction = "right";
        }
        else if (event.keyCode == 40 && this.direction != 'up') {
            direction = "down";
        }
        
        this.changeDirection( direction )
    }
    private changeDirection( direction: string ) {
        this.directionTemp = direction;
    }

    private drawScore() {
        this.ctx.fillStyle = 'white';
        this.ctx.font = "45px Arial";
        this.ctx.fillText( `${this.score}`, 2 * this.box, 1.6 * this.box );

        this.ctx.font = "24px Arial";
        this.ctx.fillText( `High score: ${this.hiscore}`, 14 * this.box, 1 * this.box );
    }

    private drawGround() {
        this.ctx.drawImage( this.background, 0, 0);
    }

    private drawSnake() {
        for (let index = 0; index < this.snake.position.length; index++) {
            
            const snake = this.snake.position[index],
            position = snake.position;

            ctx.fillStyle = (index == 0) ? "green" : "white";

            ctx.fillRect( position.x * this.box, position.y * this.box , this.box , this.box);
        }
    }

    private drawFood() {

        let draw = this.food.drawImage;

        this.ctx.drawImage( draw.image, draw.x * this.box, draw.y * this.box );
    }

    private moveSnake() {

        if (this.direction !== this.directionTemp) {
            this.sound[this.direction].play();
        }
        
        this.direction = this.directionTemp;
        this.snake.move( this.direction );
    }

    private draw() {
        this.drawGround();
        this.drawScore();
        this.drawFood();
        this.drawSnake();
    }

    private placePoint() {

        let
        position: Position = new Position(),
        cantPlace: boolean;

        do {
            cantPlace = false;
            position.random();

            for (let index = 0; index < this.snake.position.length; index++) {

                if ( this.snake.position[index].x == position.x && this.snake.position[index].y == position.y ) {
                    cantPlace = true;
                }         

            }
        }
        while (cantPlace);

        this.food.reset( position );
    }

    public start() {

        setInterval( () => {

            this.moveSnake();

            if ( this.snake.collision() ) {
                this.sound.dead.play();                
                alert('game over');
                this.reset();
            }

            /* Score+ */
            if (this.snake.position[0].x == this.food.position.x && this.snake.position[0].y == this.food.position.y) {
                this.sound.eat.play();   
                this.snake.add();
                this.score++;
                this.placePoint();

                if (this.score > this.hiscore) {
                    this.hiscore = this.score;
                }
            }
            
            this.draw();

        }, 100 );
    }

}

const 
cvs = <HTMLCanvasElement> document.getElementById("canvas"),
ctx = <CanvasRenderingContext2D> cvs.getContext('2d');

let game = new Game({
    snake: new Snake(),
    food: new Food(),
    ctx: ctx,
});