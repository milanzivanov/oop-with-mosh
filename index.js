// Constructors

function User (email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = () => {
        console.log(this.email, 'just logged in');
    }
}

let userOne = new User('milanodituti@m.com', 'Mlano');
let userTwo = new User('ivandituti@m.com', 'Ivano');

// The 'new' keyword
// Creates a nnew empty object {}
// Sets the value of 'this' to be the new empty object
// Calls the constructor method

console.log(userOne);
console.log(userTwo);
