// prototype vs Instance members

function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        this.drow();
        console.log('move');
    }
}

// Prototype members
Circle.prototype.drow = function() {
    // this.move();
    console.log('drow');
}

const c1 = new Circle(2);
const c2 = new Circle(5);

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}