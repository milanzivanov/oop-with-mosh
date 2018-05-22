// Class & Methods

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, 'just logged in');
    }
    logout() {
        console.log(this.email, 'just logged out');
    }
}

let userOne = new User('milanodituti@m.com', 'Mlano');
let userTwo = new User('ivandituti@m.com', 'Ivano');

// The 'new' keyword
// Creates a nnew empty object {}
// Sets the value of 'this' to be the new empty object
// Calls the constructor method
userOne.login();
userTwo.logout();