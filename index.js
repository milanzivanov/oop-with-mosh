let x = {};

// transformed 
// every object have constructor property
// let x = new Object();


// functions are objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Drow!");
    }
}

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log("Drow!");
    }
`);

Circle.call({}, 1); // same const another = new Circle(5);
Circle.apply({}, [1, 2, 3]);

// Intelisens icons
// Circle.prototype // properties blue
// Circle.apply // method red
const another = new Circle(5);

const circle = new Circle1(7);

