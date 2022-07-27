const title = document.querySelector('#title');
const btn = document.querySelector('.button');
const link = document.querySelectorAll('.link');
const img = document.querySelector('#myimg');

btn?.addEventListener('click', ()=> { 
  btn.classList.add('change');
  link.forEach(links => {
    if (title?.innerHTML != undefined && links instanceof HTMLAnchorElement) {
      title.innerHTML = "Hello, ImWeb" ;
      links.href = "https://www.imtest.me"
      links.classList.add('links')
    }
    img instanceof HTMLImageElement ? img.src = 'https://t1.daumcdn.net/cfile/tistory/995707455BBAF3C215' : img;
  })
    
   }) 


   const sum  = (a:number, b:number):number =>{
    return a + b;
  }
  console.log(sum('2','2'));


