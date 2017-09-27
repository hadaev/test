/*
Concatinated js file 
Author: Alex 
Created Date: 2017-09-27
 */ 
class Feet {
	constructor(name){
		this.name = name;
	}
	feetHidden(){
		$('.rabbit').css({'backgroundColor' : '#000', 'color':'#fff', 'padding':'5px'}).text(this.name);
	}
	feetShow(name){
		$('.rabbit')
		.css({'backgroundColor' : '#000', 'color':'red', 'padding':'5px'})
		.text(name);
	}
}
class Hand {
	constructor(name){
		this.name = name;
	}
	feetHidden(){
		$('.rabbit')
		.css({'backgroundColor' : '#666', 'color':'green', 'padding':'5px'})
		.text(this.name);
	}
	feetShow(name){
		$('.rabbit')
		.css({'backgroundColor' : '#666', 'color':'green', 'padding':'5px'})
		.text(name);
	}
}
class Rabbits extends Feet{
	prepare(){
		// let pre = new Feet("rabbit white");
		// pre.feetHidden(); 
		super.feetShow('super puper')
	} 
}
class RabbitTwo{
	prepare(){
		let pre = new Feet("rabbit white");
		pre.feetHidden(); 
	} 
}
(function Service() {
	let prev = new Hand();
	let reb = new Rabbits();
	$('#pion').on('keypress, keyup', function(){
		if ($('#pion').val() === '1') {
			prev.feetShow("qqweerty")
		}else{
			reb.prepare();
		}
	});
	// return
}());



// var LN2 = Math.LN2;
// var N10 = Math.LNlO;
// function getLN2()
// {
// return LN2;
// }
// function getLNlO()
// {
// return LN10;
// }
// export {getLN2, getLNlO}; 
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

//////////////////////////////////

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
// import * as log from "log";
// import * as trig from "trig";
// export default {
// log: log,
// trig: trig
// }

// var cos = Math.cos;
// var sin = Math.sin;
// function getSin(value)
// {
// return sin(value);
// }
// function getCos(value)
// {
// return cos(value);
// }
// export {getCos, getSin};