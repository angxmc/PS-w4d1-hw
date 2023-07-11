//* HAMSTER------------------------------------------------------------
class Hamster {
  constructor(owner = [], name = "Dodo", price = 15) {
    this.owner = owner;
    this.name = name;
    this.price = price;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}
//----test-----
const hamster1 = new Hamster();
hamster1.getPrice();
console.log(hamster1);

//* PERSON -------------------------------------------------------------
class Person {
  constructor(
    name = "Matcha",
    age = 0,
    height = 0,
    weight = 0,
    mood = 0,
    hamsters = [],
    bankAccount = 0
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = hamsters;
    this.bankAccount = bankAccount;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hi, ${this.name}`);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount + 10;
  }
  buyHamster(hamsterName) {
    const hamster = new Hamster(this.name, hamsterName);
    this.hamsters.push(hamster);
    this.mood++;
    this.bankAccount--;
  }
}
//----test-------------------
const person1 = new Person();
person1.buyHamster();
console.log(person1);

console.log("Create a story with your Person class");
// ** Create a story with your Person class -----------------------------------------------
//Instantiate a new Person named Timmy
const timmy = new Person("Timmy");
//Age Timmy five years
console.log(timmy);
for (let i = 0; i < 5; i++) {
  timmy.ageUp();
}
console.log(timmy);
//At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for (let i = 0; i < 5; i++) {
  timmy.eat();
}
console.log(timmy);
//Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times\
for (let i = 0; i < 5; i++) {
  timmy.exercise();
}
console.log(timmy);
//Age Timmy 9 years
for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}
//Create a hamster named "Gus",Set Gus's owner to the string "Timmy"
const hamsterGus = new Hamster("Timmy", "Gus");
console.log(hamsterGus);
// ? Have Timmy "buy" Gus
timmy.buyHamster(hamsterGus);
console.log(timmy);
//Age Timmy 15 years
for (let i = 0; i < 15; i++) {
  timmy.ageUp();
}
console.log(timmy);
//Have Timmy eat twice
for (let i = 0; i < 2; i++) {
  timmy.eat();
}
console.log(timmy);
//Have Timmy exercise twice
for (let i = 0; i < 2; i++) {
  timmy.exercise();
}

// ***** Chef Make Dinners
class Dinner {
  constructor(appetizer = '', entree ='', dessert='') {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  createDinner(appetizer,entree,dessert){
    return new Dinner(appetizer, entree, dessert);
  }
}

const chef1 = new Chef();
const dinner1 = chef1.createDinner('mushroom soup', 'salmon','tres leches');
console.log(dinner1);
const dinner2 = chef1.createDinner('Fish and Chips', 'Lobster Pasta', 'Double Chocolate Layered Cake');
console.log(dinner2);
const dinner3 = chef1.createDinner('watercress salad', 'braised beef noodle soup', 'coconut pudding with red beans')
console.log(dinner3);