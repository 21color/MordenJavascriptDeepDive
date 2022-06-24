// 18장! 함수와 일급 객체 

/**다음과 같은 조건을 만족하는 객체가 일급객체!
 * 1. 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능하다.
 * 변수나 자료구조(객체, 배열)등에 저장할 수 있다.
 * 함수의 매개변수에 전달할 수 있다.
 * 함수의 반환값으로 사용할 수 있다.
 * 
 * 자바스크립트의 함수는 다음 예제와 같이 위의 조건을 모두 만족하기때문의 일급 객체이다.
*/

const increse = function (num) {
  return ++num;
}

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다. 
const auxs ={ increse, decrease };

function makeCount(aux) {
  let num = 0;

  return function (){
    num = aux(num);
    return num;
  };
}
// 3. 함수는 매개변수에게 함수를 전달할 수 있다! 
const increser = makeCount(auxs.increse);
console.log(increser());

const decreaser = makeCount(auxs.decrease);
console.log(decreaser());
