// Adding/Removing Properties

function Circle(radius) {
    this.radius = radius;
    this.drow = function() {
        console.log('Drow!!!'); 
        
    }
}

const circle = new Circle(11);

circle.location = { x: 3 };
// same
// bracket notetion
// circle['location'] = { x: 3 };

delete circle.location;
// delete circle['location'];

console.log(circle);