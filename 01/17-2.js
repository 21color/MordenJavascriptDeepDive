const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  }
};

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  }
}

//요런..같은 행동을 하는데도 매번 같은 프로퍼티를 기술해야하는 문제가 있다 .

//but 인스턴스를 생성하기 위한 템플릿(=클래스) 처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수도 있다.

function Circle(radius) {
  console.log(this) // 암묵적으로 인스턴스 생성 this에 바인딩(circle)
  this.radius = radius; // 인스턴스 초기화
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle3 = new Circle(5);
console.log(circle3)
function foo() {
  console.log(this); //window
}

console.clear();

function Circle2(radius) {
// 1. 암묵적으로 빈 객체 생성-> this에 바인딩


// 2. this에 바인딩 되어 있는 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function(){
    return 2 * this.radius;
  };
  //3. 암묵적으로 this을 반환한다.
  // 명시적으로 객체를 반환-> 암묵적 this 반환이 무시된다.
  return {};
}
//인스턴스 생성. Circle2 생성자 함수는 명시적으로 반환한 객체를 반환한다.
const circletest = new Circle2(1);


//함수는 객체다.
function fun() {}

//함수는 객체이기때문에 프로퍼티를 소유할 수 있다.
  fun.prop = 10;

  //함수는 객체이므로 메소드를 소유할 수 있다. 
  fun.method = function() {
    console.log(this.prop);
  }


fun.method(); //10 

// 일반 함수 정의 : 함수 선언문, 표현식
function cst() {}

  const bar = function () {};
//프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수. 
//이건 메서드가 아님!!!! 
  const baz = {
    x: function () {}
  };

  //일반 함수로 정의된 함수만이 constructor 

  new foo();
  new bar();
  new baz.x();

  // const arrow = () => {};

  // new arrow(); // typeError : arrow is not a constructor

  // const obj = {
  //   x() {}
  // };

  // new obj.x(); // typeError ... 

