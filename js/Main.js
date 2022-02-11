const canvas = document.getElementById('canvas1');
const canvasContext = canvas.getContext('2d'); // object built in in all browser has, this object contains all 2d drawing methods.

//console.log(canvasContext); // check the object properties.

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 10; 
        this.weight = 2;
        this.directionX = 1;
    }
    
    update(){
        this.weight += 0.01;
        this.y += this.weight;
    }

    draw(){
        canvasContext.fillStyle = 'red';
        canvasContext.beginPatch();
        canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2); // value in radiance that converts into 360 degrees. Full circle.
        canvasContext.closePathc();
        canvasContext.fill();
    }

}

const particle1 = new Particle (100,10);

function animate(){
    particle1.update();
    particle1.draw();
    requestAnimationFrame(animate); // callling the custom function or parent function that will create a programming loop or programming concept called recursion.
}// custom function
