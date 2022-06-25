// 18.2.1 arguments 프로퍼티

// 갑자기 우회해서 rest parameter ;;;; 
function rest(...y){
  let total = 0;
  for(const arg of y) {
    total += arg;
  }
  return total;
}

console.log(rest(1,2,3,4)); // output 10 

// 함수의 마지막 매개변수 앞에 "..."(U+002E FULL STOP 문자)를 붙이면 사용자가 제공한 모든 후속 매개변수를 표준 JavaScript 배열에 넣도록 지정한다! 

function myFunc(a, b, ...manyMoreArgs) {
  console.log("a" , a);
  console.log("b" , b);
  console.log("manyMoreArgs", manyMoreArgs);
  console.log( typeof a,  typeof b,  typeof manyMoreArgs)
}

myFunc('one', 'two', 3, 4, 10, 32, 'five', 'six');
//a one
//b two
//manyMoreArgs [ 3, 4, 10, 32, 'five', 'six' ]


//이미 알고있지만! 함수 정의에는 하나의 ... 만 존재할 수 있다! (마지막 매개변수여야만 함 !) 

// foo(...a , b , c) <-이딴거 안됌
// foo(a, b, ...c) <- 이런게 됩니다.

//arguments 객체는 실제 배열이 아님! 그렇지만 rest param은 Array 인스턴스이기때문에 sort, map, forEach, pop 등의 메서드를 직접 적용할 수 있다. 

// 인수에서 배열로 ! 
// rest 이전에 'arguments'를 일반 배열로 변환하던 방법

function fuc(a, b) {
  let normalArray = Array.prototype.slice.call(arguments)
  // -- 또는 --
  //let normalArray = [].slice.call(arguments)
  // -- 또는 --
  //let normalArray = Array.from(arguments)

  // let first = normalArray.shift()  // 동작, 첫 번째 매개변수 반환
  // let first = arguments.shift()    // 오류, arguments는 실제 배열이아님! 
}

// 여기서 또 array.from()...은 무엇이냐 
// 유사배열 객체나 반복 가능한 객체를 쉘로~카피해서 새로운 array 객체를 만듭니다~! 

// arrayLike 배열로 변환하고자 하는 유사 배열 객체나 반복 가능한 객체
// mapfn 배열의 모든 요소에 대해 호출할 maping 함수
// thisArg mapFn 실행 시에 this로 사용할 값.
// => return 새로운 Array.인스턴스 

// 시퀀스 생성기(range) 

const range = (start, stop, step) => {
 return Array.from( {length: (stop - start) / step + 1}, (_, i) => start + (i * step));
} 

console.log(range(1, 2, 3));
console.clear()