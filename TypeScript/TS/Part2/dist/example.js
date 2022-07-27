"use strict";
const button = document.querySelector('#WelcomeBtn');
function whatIsThis(x = {}) {
    document.body.innerHTML = `<h1 id="title"> Welcome ${x} ${x === true ?
        "JavaScript" :
        "TypeScript"} Study </h1>`;
}
const welcome = (a) => a;
button?.addEventListener('click', () => whatIsThis(welcome('IMWEB')));
//# sourceMappingURL=example.js.map