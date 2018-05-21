// Factory Function
function createCircle(radius) {
    return {
        // properties
        radius: radius, 
        // method
        draw() {
            console.log("Drow");
        }
    }
}

const circle = createCircle(5);
circle.draw();