// import math from "math";
// console.log(math.trigonometry.getSin(3));
// console.log(math.logarithm.getLN2(3));
'use strict';
class User2 {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
   console.log(this.name, ' name');
  }
}
let user = new User2("Вася");
user.sayHi();
///////////////////////////////////
let SiteGuest = class User {
  sayHi() { console.log('Привет!'); }
};

new SiteGuest().sayHi(); // Привет



class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static createGuest() {
    return new User("Гость", "Сайта");
  }
};

let user3 = User.createGuest();
console.log( user3.firstName ); // Гость
console.log( User.createGuest ); // createGuest ... (функция)

/////////////////////////////////

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("I walk: " + this.name);
  }
}

class Rabbit2 extends Animal2 {
  walk() {
    super.walk();
    console.log("...and jump!");
  }
}

new Rabbit2("Вася").walk();
// I walk: Вася
// and jump!

/////////////////////////////
class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("I walk: " + this.name);
  }
}

class Rabbit extends Animal {
  constructor() {
    // вызвать конструктор Animal с аргументом "Кроль"
    super("Кроль"); // то же, что и Animal.call(this, "Кроль")
  }
}

new Rabbit().walk(); // I walk: Кроль