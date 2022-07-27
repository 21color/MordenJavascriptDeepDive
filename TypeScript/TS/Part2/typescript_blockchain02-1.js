var button = document.querySelector('#WelcomeBtn');
function whatIsThis(x) {
    if (x === void 0) { x = {}; }
    document.body.innerHTML = "Welcome ".concat(x, " ").concat(x === true ?
        "JavaScript" :
        "TypeScript", " Study ");
}
var welcome = function (a) { return a; };
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () { return whatIsThis(welcome('IMWEB')); });
