## Array.reduce() 
> 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고 하나의 결과값을 반환한다.

    array.reduce(callback[, initialValue(초기값)])

  - callback : 배열의 각 요소에 대해 실행할 함수, 다음 네 가지 인수를 가짐
    - accumulator : 누산기, 콜백의 반환값을 누적, 콜백의 이전 반환값 또는 콜백의 첫 번째 호출이면서 ititialValue를 제공한 경우에는 initialValue의 값임. 

    - currentValue : 처리할 현재 요소

    - currentIndex(Optional) : 처리할 현재 요소의 인덱스값. initialValue를 제공한 경우 0 , 아니면 1부터 시작 

    - Array (Optioanl) :  reduce()를 호출할 배열

  - intitalValue(Optional) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용한다. 빈 배열에서 초기값 없이 reduce() 를 호출하면 오류가 발생됌 

## 사용 방법
> reduce() 에는 누산기가 포함되어 있기 때문에, 배열의 각 요소에 대해 함수를 실행하고 누적된 값을 출력할 때 용이하다. 가장 기본적인 예제로는 모든 배열의 합을 구하는 경우가 있다.

```js
const arr = [1, 2, 3, 4, 5];
const reduceResult = arr.reduce((acc, cur, index)=> {
  return acc += cur  
}, 0);

console.log(reduceResult); //15

const arr2 = [6,7,8,9,10];
const reduceResult2 = arr2.reduce( (acc, cur, idx ) => {return acc += cur}, 10)

console.log(reduceResult2); //50
```
  위의 예제에서 intialValue값을 0으로 두었기때문에 acc의 초기값은 0이 되고, 배열의 첫 번째 요소에서 acc에 자신의 값인 cur을 더해간다.되reduce를 실행하고 난 뒤, 최종적으로 반환되는 값은 초기값 포함 자기 자신을 모두 더해서 반환된다. 

> intitalValue에는 배열이 들어갈 수도 있다.
주어지는 배열에서 음수와 양수의 개수를 카운트해서 출력하는 경우이다. 

```js
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
```




