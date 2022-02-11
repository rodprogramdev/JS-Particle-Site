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
        if(this.y > canvas.height){
            this.y = 0 - this.size;
        }
        this.weight += 0.01;
        this.y += this.weight;
    }

    draw(){
        canvasContext.fillStyle = 'blue';
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2); // value in radiance that converts into 360 degrees. Full circle.
        canvasContext.closePath();
        canvasContext.fill();
    }

}

const particle1 = new Particle (10,0);

function animate(){
    canvasContext.fillStyle = 'rgba(255,255,255,0.01)';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);

    particle1.update();
    particle1.draw();
    requestAnimationFrame(animate); // callling the custom function or parent function that will create a programming loop or programming concept called recursion.
}// custom function

animate();