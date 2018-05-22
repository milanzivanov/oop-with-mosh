// Class & Methods
// Method Chaining

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

let userOne = new User('milanodituti@m.com', 'Mlano');
let userTwo = new User('ivandituti@m.com', 'Ivano');

// The 'new' keyword
// Creates a nnew empty object {}
// Sets the value of 'this' to be the new empty object
// Calls the constructor method
userOne.login().logout().updateScore();
userTwo.logout().updateScore().updateScore();