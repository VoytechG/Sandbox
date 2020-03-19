let user = {
  name: "John",
  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
};

var func = phrase => {
  console.log(phrase + this.name);
};

func = func.bind(user);
let sayHi = user.sayHi.bind(user);

setTimeout(() => {
  sayHi();
  func("Hi ");
}, 100);

// ...within 1 second
user = {
  sayHi() {
    console.log("Another user in setTimeout!");
  }
};

// Another user in setTimeout?!?
