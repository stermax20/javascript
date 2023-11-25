'use strict';

let globalName = 'global variable';
{
    let localName = 'Java';
    console.log(localName);
    localName = 'hello';
    console.log(localName);
    console.log(globalName);
}

// console.log(localName);
// console.log(globalName);

// {
//     age = 4;
//     var age;
// }

// console.log(age);

const dayInweek = 7;
const maxNumber = 5;

//number (-2^53 ~ 2^53)

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// const infinity = 1 / 0;
// const negativeInfinity = -1 / 0;
// const nAn = 'not a number' / 2;
const I = 1 / 0;
const N = -1 / 0;
const K = 'not a number' / 2;
console.log(I);
console.log(N);
console.log(K);

const char = 'k';
const gbsw1 = 'gbsw1';
const greeting = 'hello ' + gbsw1;
console.log(`value: ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${gbsw1}!`;
console.log(`value: ${helloBob}, type : ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type : ' + typeof helloBob);

const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type : ${typeof canRead}`);
console.log(`value: ${test}, type : ${typeof test}`);

// //null
let nothing = null;
console.log(`value: ${nothing}, type : ${typeof nothing}`);

// //undefined
let x;
let y = undefined;
console.log(`value: ${x}, type : ${typeof x}`);
console.log(`value: ${y}, type : ${typeof y}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
//console.log(`value: ${symbol1}, type : ${typeof symbol1}`);
console.log(`value: ${symbol1.description}, type : ${typeof symbol1}`);

let text = 'javascript';
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type: ${typeof text}`);

const gbsw = { name: 'alphagom', age: 52 };
console.log(gbsw);
gbsw.name = 'betagom';
gbsw.age = 20;
console.log(gbsw);
