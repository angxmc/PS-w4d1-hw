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
  greet(){
    console.log(`Hi, ${this.name}`);
  }
  eat(){
    this.weight++;
    this.mood++;
  }
  exercise(){
    this.weight--;
  }
  ageUp(){
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount+10;
  }
  buyHamster(){
    const hamster = new Hamster();
    this.hamsters.push(hamster);
    this.mood++;
    this.bankAccount--;
  }
}
//----test-------------------
const person1 = new Person();
person1.buyHamster();
console.log(person1);
