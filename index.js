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

// Class Inheritance
class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email !== user.email;
        });
    }
}

let userOne = new User('milanodituti@m.com', 'Mlano');
let userTwo = new User('ivandituti@m.com', 'Ivano');
let admin = new Admin('miki@m.com', 'Miki');

// The 'new' keyword
// Creates a nnew empty object {}
// Sets the value of 'this' to be the new empty object
// Calls the constructor method
userOne.login().logout().updateScore();
userTwo.logout().updateScore().updateScore();

let users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);
