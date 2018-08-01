class User {
    // class constructor
    // this can be envoked whenever we create a new object
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    // defining a method in a class

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

class Admin extends User {
    deleteUser(user) {

        /*filter() in js allows as to cycle/iterate through
        each element inside the array and filter one of then out the array
        */
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

var userOne = new User('aditya.x510@gmail.com', 'aditya raj');
var userTwo = new User('bhaskar.x510@gmail.com', 'bhaskar uday');
var admin = new Admin('gnsaddy@gmail.com', 'Addy');

var users = [userOne, userTwo,admin];

admin.deleteUser(userOne);
console.log(users);