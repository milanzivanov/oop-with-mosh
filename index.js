// constructor function
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
        
//     }
// }

// class declaration
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
        }
    }
    // instance method
    draw() {
        console.log('drow');
    }

    // static methos
    static pase(str) {
        JSON.parse(str)
    }
}

const c = new Circle(1);
console.log(circle);


// class expresion

const Something = class {

};