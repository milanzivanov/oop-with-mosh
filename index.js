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

function Admin(...args) {
    console.log(args);
    User.apply(this, args);
    this.role = 'Super user';
}

// inherit User
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deliteUser = function(u) {
    users = users.filter(user => {
        return user.email !== u.email;
    });
};

let userOne = new User('milanodituti@m.com', 'Mlano');
let userTwo = new User('ivandituti@m.com', 'Ivano');
let admin = new Admin('learning@m.com', 'Kiki');

let users = [userOne, userTwo, admin];

// The 'new' keyword
// Creates a new empty object {}
// Sets the value of 'this' to be the new empty object
// Calls the constructor method

console.log(admin);

