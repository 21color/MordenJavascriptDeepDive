// Object 생성자 함수 
// Class 등장 이전엔 이녀석을 사용했지

const person = new Object();

person.name = 'hana';
person.sayHello = function () {
  console.log('Hi! My name is' + this.name)
};

console.log(person);
person.sayHello()

// ES6 CLass // 


class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello =()=> {
    console.log(`Hi! My name is ${this.name}!`)
  }
}

const classperson = new Person('hana');

console.log(classperson);
classperson.sayHello()

console.clear();

//String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj); //object
console.log(strObj); // [String: 'Lee']

//Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); //object
console.log(numObj); // [Number: 123]

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj); //object
console.log(boolObj); // [Boolean: true]

// function 생성자 함수에 의한 function 객체 생성
const func = new Function('x', 'return x * x');
console.log(typeof func); //function
console.log(func); //[Function: anonymous]

// Array 생성자 함수에 의한 Array 객체 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr); // [1, 2, 3];

// RegExp (규식이형..!!) 함수에 의한 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); //object
console.log(regExp); // /ab+c/i

//Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date); // 2022-06-19T13:56:59.876Z
