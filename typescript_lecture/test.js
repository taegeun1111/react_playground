/**
 * @description 두 수의 합을 구하는 함수
 * @param {string} a
 * @param {number} b
 * @returns
 */

function sum(a, b) {
  return a + b;
}

var total = sum("10", 20);

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  logAge() {
    console.log(this.age);
  }
}

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }

  logDeveloperInfo() {
    this.logAge();
    console.log(this.name);
    console.log(this.skill);
  }
}
