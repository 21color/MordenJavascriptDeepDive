// new.target 은 ES6에서 도입된 최신 문법
// new.target을 사용할 수 없는 상황이라면 스코프 세이프 생성자 패턴을 사용할 수 있다.

function Circle(radius) {

  //생성자 함수가 new 연산자와 함께 호출되면? 함수의 선주에서 빈 객체를 생성하고 this에 바인딩. 

  //이때 this와 Circle은 프로토타입에 의해 연결된다.

  //이 함수가 new 연산자와 함께 호출되지않았다면 
  //this는 전역 객체 window ! 
  //즉 this와 Circle은 프로토 타입에 연결되지 않음. 
  if(!(this instanceof Circle)) {

    // new 연산자와 함께 호출하여 생성된 인스턴스 반환
    return new Circle(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.! 
const circle = Circle(5);
console.log(circle.getDiameter());