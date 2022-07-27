interface Student {
  name: string;
}

interface Teacher extends Student  {
  age: number;
}

const 학생:Student = {
  name: 'kim'
}
const 선생:Teacher = {
  name: 'kim',
  age: 20,
}

console.log(선생)

type Animal = {name: string}
type Cat = {age: number} & Animal

const cat:Cat = {name: 'nabi', age: 3} 

console.log(cat);