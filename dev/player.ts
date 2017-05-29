class Player {

private ball: HTMLElement;
public posX : number = 0;
public posY : number = 750;
private speedLeft : number = 0;
private speedRight : number = 3;
private speedUp : number = 0;
private speedDown : number = 0;
private upKey : string
private downKey : string
private leftKey : string
private rightKey : string

    constructor(upKey: string, downKey: string, leftKey: string, rightKey: string ){
        
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;

        this.ball = document.createElement("ball");
        document.body.appendChild(this.ball);

        

        window.addEventListener("keydown",(event : KeyboardEvent) => this.onKeyDown(event));
        this.move();
        
    }
    
    move(){
        
        this.posY = this.posY - this.speedUp + this.speedDown;
        this.posX = this.posX - this.speedLeft + this.speedRight;

        this.ball.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    
    }

    reset(){
        this.posX = 0; 
        this.posY = 750;
        this.speedDown = 0;
        this.speedUp = 0;
        this.speedLeft = 0;
        this.speedRight = 3;
        
    }

    onKeyDown(event: KeyboardEvent):void{
        switch(event.key){
            case this.upKey:
                this.speedUp = 3;
                this.speedLeft = this.speedRight = this.speedDown = 0;
                console.log(event.key)
                break;
            case this.downKey:
                this.speedDown = 3;
                this.speedLeft = this.speedRight = this.speedUp = 0;;
                console.log(event.key)
                break;
            case this.leftKey:
                this.speedLeft = 3;
                this.speedUp = this.speedRight = this.speedDown = 0;
                console.log(event.key)
                break;
            case this.rightKey:
                this.speedRight = 3;
                this.speedLeft = this.speedUp = this.speedDown = 0;
                console.log(event.key)
                break;
        }
    }
}