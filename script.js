var context;
var konva;
var circle
document.addEventListener('keydown', function(event) {
    if(circle == null){
        console.log('not here yet!');
    }
    else{
        if(event.keyCode = 87){
            circle.moveUp();
        }
    }
});

window.onload = function() {
    konva = document.getElementById('konva');
    context = konva.getContext('2d');
    circle = new Circle();
}

class Circle {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.r = 50;
        this.start = 0;
        this.end = Math.PI*2;
        this.color = "#ff6b6b";
        this.draw();      
    }

    draw() {
        context.strokeStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.start, this.end);
        context.stroke();
    }
    
    erase() { 
        context.clearRect(0, 0, konva.width, konva.height);
    }

    moveUp() {
        console.log('sup');
        this.erase();
        this.y = this.y - 10;
        this.draw();
    }
}
