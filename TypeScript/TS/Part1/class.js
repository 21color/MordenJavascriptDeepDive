"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(a, ...b) {
        this.name = a;
        this.age = b;
    }
}
const result = [1, 2, 3, 4, 5];
const person1 = new Person('sara', ...result);
console.log(person1);
const func = (b, c, ...a) => {
    console.log(b, c, a);
};
func(1, '2', 3, 4, 5, 6, 7, 10);
class Car {
    model;
    price;
    constructor(a, b) {
        this.model = a;
        this.price = b;
    }
    result = () => {
        return this.price * 0.1;
    };
}
const car = new Car('하나카', 3000);
console.log(car);
console.log(car.result());
