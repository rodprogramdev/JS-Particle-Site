const canvas = document.getElementById('canvas1');
const canvasContext = canvas.getContext('2d'); // object built in in all browser has, this object contains all 2d drawing methods.

//console.log(canvasContext); // check the object properties.

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

const numberOfParticles = 100;

//title element collision
let titleElement = document.getElementById('title1');
titleMeasurements = titleElement.getBoundingClientRect();//contains an object that contains the size of an element and its position relative to the browser window.
//console.log(titleMeasurements); //check values.

let title = {
    x:titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width, 
    height: titleMeasurements.height
}// get all properties from the title element- converted html elements bounding blocks to javascript object.

class Particle {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 1; //change the size to a random number
        this.weight = Math.random() * 2 + 1; // represents gravity
        this.directionX = -2; // will simulate a wind. - value gets wind move the left + value moves wind to the right 
    }
    
    update(){
        
        if(this.y > canvas.height){
            this.y = 0 - this.size;
            this.weight = Math.random() * 2 + 1; // this will reset the weight and solve issue with falling too fast.
            this.x= Math.random() * canvas.width * 1.5; // randomize the position of the particle on the screen add canvas.width * 1.2 to reset the position to the right bottom corner. 
        }   
        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX; // for every frame add particles effect of wind to get the particle gets push to the left
        
        //check for collision between particles and h1 element title
        if(
            this.x < title.x + title.width && 
            this.x + this.size > title.x && 
            this.y < title.y + title.height &&
            this.y + this.size > title.y
        ){
            this.y -= 3;
        }
        
    }



    draw(){
        canvasContext.fillStyle = 'blue';
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.size, 0, Math.PI * 2); // value in radiance that converts into 360 degrees. Full circle.
        canvasContext.closePath();
        canvasContext.fill();
        
    }

}

function init(){
    for (let i = 0; i < numberOfParticles; i++){
        const particlePositionX = Math.random() * canvas.width;
        const particlePositionY = Math.random()* canvas.height;
        
        particlesArray.push(new Particle(particlePositionX, particlePositionY));
    }

    console.log(particlesArray); // check to run particles function

}

init();
/*
const particle1 = new Particle (10,0);
const particle2 = new Particle (100,100);*/



function animate(){
    canvasContext.fillStyle = 'rgba(255,255,255,0.01)';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
/*
    particle1.update();
    particle1.draw();
    particle2.update();
    particle2.draw();*/
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();// call update method
        particlesArray[i].draw();//call draw method.
    }
    
    //canvasContext.fillRect(title.x,title.y,title.width,title.height);
    requestAnimationFrame(animate); // callling the custom function or parent function that will create a programming loop or programming concept called recursion.
}// custom function

animate();