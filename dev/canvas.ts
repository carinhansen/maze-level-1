class Canvas {

    constructor(){

        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var canvasWidth = window.innerWidth;
        var canvasHeight = window.innerHeight;
        var img = new Image();
        img.src = './images/level1.png'
        ctx.drawImage(img,0,0,1140,656);


        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}