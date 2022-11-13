function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  //this.age = age;
  let age = 0;
  this.setAge = function (a) {
    if (a > 0) {
      age = a;
    } else {
      alert("Цей собака, очевидно, ще не з'явився на світ...");
    }
  };

  this.getAge = function () {
    return age;
  };
  this.speed = 0;
  this.bark = function () {
    if (this.weight > 10) alert(this.name + " сказав Гав!");
    else alert(this.name + " сказав Тяф!");
  };
  this.changeSpeed = function () {
    let min = 0.5;
    let max = 2;
    let dop = Math.random() * (max - min) + min;
    if (this.weight < 25 && this.speed >= 4)
      alert(`${this.name} швидше не може!`);
    else if (this.speed >= 20) alert(`${this.name} швидше не може!`);
    else {
      this.speed *= dop.toFixed(2);
      alert(`Моя швидкість дорівнює ${this.speed}`);
    }
  };
  this.start = function () {
    this.speed = 1;
  };
  this.stop = function () {
    this.speed = 0;
  };
  this.addWeight = addWeight;
  this.toString = function () {
    return `Я ${this.name} породи ${this.breed} і важу ${weight} кг `;
  };
}

function addWeight(amount) {
  this.weight += amount;
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

let dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
  alert(dogs[i]);
  dogs[i].bark();
  dogs[i].start();
  dogs[i].changeSpeed();
}
// fido.setAge(-2); // "Цей собака, очевидно, ще не з'явився на світ..."
// alert(fido.getAge()); // 0
