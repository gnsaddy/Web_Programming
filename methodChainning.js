class User {
    // class constructor
    // this can be envoked whenever we create a new object
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score=0;
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
    updateScore(){
        this.score++;
        console.log(this.email,'score is now', this.score);
        return this;
    }
}

var userOne = new User('aditya.x510@gmail.com', 'aditya raj');
var userTwo = new User('bhaskar.x510@gmail.com', 'bhaskar uday');

userOne.login().updateScore().updateScore().logout();

