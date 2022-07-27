import { values } from 'lodash';

const func = (a:number,...b:number[]):void => {
  console.log(a,b);
}

func(1,2,3,4,5); 
// rest parameter

const arry:string[] = ['1,2,3'];
const arr2:number[] = [4, 5];

const arr3:(string | number)[] = [...arr2, ...arry];

console.log(arr3);

const [val1, val2] = ['hana', 29];
// destrucring
console.log(val1)

type Student = ({student, age} : {student : string , age : number}) => void;

const fuc:Student = ({ student, age }) => {
  console.log(`${student} , ${age}`);
}
fuc({ student : 'hana', age : 29})

const returnValue = (...a:number[]):number => {
  let maxNum = 0;
  a.forEach( value => {
    maxNum < value  ? maxNum = value : maxNum;
  })
  return maxNum;
}

console.log(returnValue(1,2,1030,3,4,5));

type Users = ({user, comment, admin} : {user: string, comment: number[], admin: boolean}) => void;

const testuser:Users = ({user, comment, admin}) => {
  console.log(user,comment,admin)
}
testuser({user: 'kim', comment: [1, 2, 3] ,admin: true});

type ArrayTest = (number | string | boolean)[];
const ArrayParaTest = ([a, b, c]: ArrayTest) => {
  console.log(a,b,c)
}
ArrayParaTest([40, 1, false]);