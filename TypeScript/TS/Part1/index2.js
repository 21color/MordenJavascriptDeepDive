"use strict";
const myfunction = function (a) {
    return 12 + a;
};
console.log(myfunction('10'));
const index = {
    name: 'kim',
    age: 10,
    plusOne(a) {
        return a + 1;
    }
};
console.log(index.plusOne(10));
const cutZero = (str) => {
    const strreg = str;
    if (str.charAt(0) === 'O') {
        return strreg.replace(/\O/g, '');
    }
    else
        return str;
};
console.log(cutZero('Origin'));
const removeDash = (str) => {
    const parsnum = str;
    return parseInt(parsnum.replace(/\-/g, ''));
};
console.log(removeDash('1-1'));
const myFunc = (str, func, func2) => {
    return func(str), func2(str);
};
console.log(myFunc('010-2734-3498', cutZero, removeDash));
// 나는 이렇게 하긴했는데... 
