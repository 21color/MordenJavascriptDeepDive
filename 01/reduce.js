//Array.prototype.reduce()
//배열 요소에 대해 주어진 reducer 함수를 실행하고 하나의 결과값 반환 
//네개의 인자를 갖는다. acc(누산기) cur(현재값) idx(현재인덱스) src(원본배열)
const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInital = 
  array1.reduce(
  (pre, current)=>
  pre + current, initialValue
);

console.log(sumWithInital)

const data = [2, 3, 1, 5, 10 ,9];

const init = [];
const reducer = function(acc, value) {
  if (value % 2 != 0) {
    acc.push(value);
  }
  return acc;
};

const result1 = console.log(data.reduce(reducer, init));

const result2 = console.log(data.filter(x => x % 2 != 0));
// 이렇게 계산식이 없고 결과만 출력하게된다면 filter 메서드나 map 메서드가 직관적일 수 있다. 
console.clear();

const arr = [1, 2, 3, 4, 5];
const reduceResult = arr.reduce((acc, cur, index)=> {
  return acc += cur  
}, 0);

console.log(reduceResult);

const arr2 = [6,7,8,9,10];
const reduceResult2 = arr2.reduce( (acc, cur, idx ) => {return acc += cur}, 10)

console.log(reduceResult2);

const numbers = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];

const numbersResult = numbers.reduce((acc, cur, idx)=> {
  if(cur < 0) {
    acc[0]++ ;
  } else if (cur > 0) {
    acc[1]++;
  }
  return acc;

}, [0, 0]);

console.log(numbersResult); // [4, 5]

const sum = [
  {x: 1}, {x: 2}, {x : 3}
].reduce((acc, cur) => {
  return acc + cur.x;
}, 0)

console.log(sum); //6 

// 배열 펼치기 ! flat! 
const flattend = [[0, 1], [2, 3], [4, 5]].reduce(
  function(acc, cur) {
    return acc.concat(cur);
  },
  [] // 초기값 공배열 
);

console.log(flattend); 
//[ 0, 1, 2, 3, 4, 5 ]

//객체 내의 값 인스턴스 개수 세기 

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedName = names.reduce((allName, name)=> {
  name in allName ? allName[name]++ : allName[name] = 1; 
  return allName
}, {});

console.log(countedName); 
//{ Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

// 속성으로 객체 분류하기 

const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
]

const groupBy =(obj, pro)=> {
  return obj.reduce(function(acc, obj) {
    let key = obj[pro];
    if(!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const gripedPeople = console.log(groupBy(people, 'age'));

// sapread 사용하여 객체로 이루어진 배열에 담긴 배ㅐ열 연결하기 

const friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

const allbooks = friends.reduce((acc, cur)=> {
  console.log(`acc : ${acc}, cur : ${cur}`);
  return [...acc, ...cur.books];
},['Alphabet']);

console.log(allbooks);

const array3 = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

let result = array3.sort().reduce((acc, cur)=> {
  const length = acc.length
  if(length === 0 || acc[length - 1] !== cur) {
    acc.push(cur)
  }
  return acc; 
}, []);

console.log(result);// [1, 2, 3, 4, 5]
console.clear()


// runs promises from array of functions that can return promise 

function runPromiseInSequence(arr, input) {
  return arr.reduce((promiseChain, currentFunction
  )=> promiseChain.then(currentFunction), Promise.resolve(input))
}

// promise function 1  

function p1(a) {
  return new Promise((resolve, reject)=> resolve(a*5))
}

// promise function 2 

function p2(a) {
  return new Promise((resolve, reject)=> resolve(a * 2))
}

function f3(a) {
  return a * 3
}

function p4(a) {
  return new Promise((resolve, reject) => {
    resolve (a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10).then(console.log);


// 아니 왜 reduce 하다가 promise까지 오냐고 ;
const p = Promise.resolve([1, 2, 3]);
p.then(function(v){
  console.log(v[0]);
})

Promise.resolve('Success').then(function(value) {
  console.log(value);
}, function(value) {
  return false;
});

const arraytest = [3, 4, 5, 6 ]
const b = Promise.resolve([1, 2, 3, ...arraytest]);
b.then((v) => {
  console.log(v);
})

// Resolving another Promise 

const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then(function(value) {
  console.log('value: ' + value);
});

console.log('original === cast ?' + (original === cast)); 

