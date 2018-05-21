// Factory Function
function createCircle(radius) {
    return {
        // properties
        radius: radius, // shorter radius
        // method
        draw() {
            console.log("Drow");
        }
    }
}

const circle = createCircle(5);

// Constructor Function
function Circle(radius) {
    // console.log(`this`, this);
    this.radius = radius;
    this.drow = function() {
        console.log("Drow!");
    }
}

// three things happend
// 1 this new operator create a empty object {}
// 2 than it's gona set this to point that object
// 3 and finaly it return object from function Circle it is automated
const another = new Circle(5);