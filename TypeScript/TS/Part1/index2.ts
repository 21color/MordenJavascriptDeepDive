type functype = (a: string) => number | string

const myfunction:functype = function (a) {
  return 12 + a
}

console.log(myfunction('10'))


interface MyIndex {
  name: string,
  age: number,
  plusOne: (a:number) => number ;
}

const index:MyIndex = {
  name : 'kim',
  age: 10,
  plusOne(a) {
    return a + 1
  }
}
console.log(index.plusOne(10))



const cutZero = (str: string):string => {
  const strreg = str;
  if(str.charAt(0) === 'O') {
    return strreg.replace(/\O/g,'');
  } else return str;
}

console.log(cutZero('Origin'));

const removeDash = (str: string):number => {
  const parsnum = str;
  return parseInt(parsnum.replace(/\-/g,''));
}

console.log(removeDash('1-1'));

type test1 = (str: string) =>  string;
type test2 = (str: string) => number;

type MytypeFunction = (str: string,func:test1, func2:test2) => number;

const myFunc:MytypeFunction = (str, func, func2) => {
  return func(str) , func2(str)
} 
console.log(myFunc('010-2734-3498',cutZero,removeDash))

// 나는 이렇게 하긴했는데... 

