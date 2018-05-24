// Constructors

function User (email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'just logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'just logged out');
}

let userOne = new User('milanodituti@m.com', 'Mlano');
let userTwo = new User('ivandituti@m.com', 'Ivano');

// The 'new' keyword
// Creates a new empty object {}
// Sets the value of 'this' to be the new empty object
// Calls the constructor method

console.log(userOne);
console.log(userTwo);
userTwo.login();
userOne.logout();
