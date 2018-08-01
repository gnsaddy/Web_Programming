class User {
    // class constructor
    // this can be envoked whenever we create a new object
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    // defining a method in a class

    login() {
        console.log(this.email, 'just logged in');

    }
    logout() {
        console.log(this.email, 'just logged out');
    }
}

var userOne = new User('aditya.x510@gmail.com', 'aditya raj');
var userTwo = new User('bhaskar.x510@gmail.com', 'bhaskar uday');

// document.write(userOne.name + " has email id " + userOne.email + "<br/>");
// document.write(userTwo.name + " has email id " + userTwo.email);

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.logout();