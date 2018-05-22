// Itereting properties

function Circle(radius) {
    // Instance members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

const c1 = new Circle(2);

// Prototype members
Circle.prototype.drow = function() {
    // this.move();
    console.log('drow');
}

// Returns instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) {
    console.log(key);
}


