
const button2 = document.querySelector('#WelcomeBtn')

function whatIsThis(  x = { } ) {
  // param 으로 x = obj 할당
  document.body.innerHTML = `<h1 id="title"> Welcome ${x} ${
    x === true ? 
    // x === obj ? 
    "JavaScript" :
    "TypeScript" 
  } Study </h1>`;
  const title = document.querySelector('#title');
        title?.classList.add('active'); 

        // ts에서는 narrowing 을 해 주어야 dom 객체를 다룰때 오류가 없습니당. 
}
const welcome2 = (a:string):string => a; //param 을 return 

button2?.addEventListener('click', () => whatIsThis(welcome2('IMWEB'))) //object니까 함수도 할당 가넝