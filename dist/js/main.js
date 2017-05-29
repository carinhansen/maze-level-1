var Canvas = (function () {
    function Canvas() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var canvasWidth = window.innerWidth;
        var canvasHeight = window.innerHeight;
        var img = new Image();
        img.src = './images/level1.png';
        ctx.drawImage(img, 0, 0, 1140, 656);
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
    return Canvas;
}());
var Finish = (function () {
    function Finish() {
        this.div = document.createElement('finish');
        document.body.appendChild(this.div);
        this.posX = window.innerWidth - 40;
        this.posY = 100;
    }
    Finish.prototype.move = function () {
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Finish;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.p = new Player('w', 's', 'a', 'd');
        this.f = new Finish();
        this.c = new Canvas();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameLoop(); });
        this.p.move();
        this.f.move();
        this.collision();
    };
    Game.prototype.collision = function () {
        if (this.f.posX < this.p.posX + 40 &&
            this.f.posX + 40 > this.p.posX &&
            this.f.posY < this.p.posY + 40 &&
            80 + this.f.posY > this.p.posY) {
            this.p.reset();
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Player = (function () {
    function Player(upKey, downKey, leftKey, rightKey) {
        var _this = this;
        this.posX = 0;
        this.posY = 750;
        this.speedLeft = 0;
        this.speedRight = 3;
        this.speedUp = 0;
        this.speedDown = 0;
        this.upKey = upKey;
        this.downKey = downKey;
        this.leftKey = leftKey;
        this.rightKey = rightKey;
        this.ball = document.createElement("ball");
        document.body.appendChild(this.ball);
        window.addEventListener("keydown", function (event) { return _this.onKeyDown(event); });
        this.move();
    }
    Player.prototype.move = function () {
        this.posY = this.posY - this.speedUp + this.speedDown;
        this.posX = this.posX - this.speedLeft + this.speedRight;
        this.ball.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Player.prototype.reset = function () {
        this.posX = 0;
        this.posY = 750;
        this.speedDown = 0;
        this.speedUp = 0;
        this.speedLeft = 0;
        this.speedRight = 3;
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.key) {
            case this.upKey:
                this.speedUp = 3;
                this.speedLeft = this.speedRight = this.speedDown = 0;
                console.log(event.key);
                break;
            case this.downKey:
                this.speedDown = 3;
                this.speedLeft = this.speedRight = this.speedUp = 0;
                ;
                console.log(event.key);
                break;
            case this.leftKey:
                this.speedLeft = 3;
                this.speedUp = this.speedRight = this.speedDown = 0;
                console.log(event.key);
                break;
            case this.rightKey:
                this.speedRight = 3;
                this.speedLeft = this.speedUp = this.speedDown = 0;
                console.log(event.key);
                break;
        }
    };
    return Player;
}());
//# sourceMappingURL=main.js.map