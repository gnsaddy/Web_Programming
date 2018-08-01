var userOne = {
  email: "aditya.x510@gmail.com",
  name: "Aditya Raj",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has log out");
  },
  displayOne() {
    document.write(this.email + "<br/>");
    document.write(this.name + "<br/>");
  }
};

var userSecond = {
  email: "bhaskar.x510@gmail.com",
  name: "Bhaskar Uday",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has log out");
  },
  displaySecond() {
    document.write(this.email + "<br/>");
    document.write(this.name + "<br/>");
  }
};

var userThird = {
  email: "astha.x510@gmail.com",
  name: "Astha Pandey ",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has log out");
  },
  displayThird() {
    document.write(this.email + "<br/>");
    document.write(this.name + "<br/>");
  }
};
displayAll();

function displayAll(){
  document.write(userOne.displayOne());
  document.write(userSecond.displaySecond());
  document.write(userThird.displayThird());
}