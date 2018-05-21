// Enumereting Properties

// function Circle(radius) {
//     this.radius = radius;
//     this.drow = function() {
//         console.log('Drow!!!'); 
        
//     }
// }

// const circle = new Circle(11);

// for (let key in circle) {
//     if (typeof circle[key] !== 'function') {
//         console.log(key, circle[key]);
//     }
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle) {
//     console.log("Circle has a radius");
    
// }

// Private Properties and methods

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};
    let computeOptimumLocation = function(factor) {
        // magic
    }

    this.drow = function() {
        computeOptimumLocation(0.1);
        // defaultLocation
        // this.radius

        console.log('Drow!!!');
    };
}

const circle = new Circle(10);
circle.drow();