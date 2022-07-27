import { forOwn } from 'lodash';

class Person {
  name: string;
  age: number[];
  constructor(a: string, ...b:number[]) {
    this.name = a;
    this.age = b;
  }
}

const result:number[] = [1, 2, 3, 4, 5];
const person1 = new Person('sara', ...result);

console.log(person1);

const func = (b: number, c: string, ...a: number[]) => {
  console.log(b, c, a)
}

func(1, '2', 3, 4, 5, 6, 7, 10)

class Car {
  model: string;
  price: number;
  constructor(a:string, b:number) {
    this.model = a;
    this.price = b;
  }
  result = ():number => {
    return this.price * 0.1;
  }
}
const car = new Car('하나카', 3000);
console.log(car)
console.log(car.result())

