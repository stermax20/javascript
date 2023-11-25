'use strict';

function doSomething() {
    console.log('hello');
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

doSomething();

const result = add(1, 2);
console.log(result);

const result2 = add(2, 3);
console.log(result2);

function add(a, b) {
    const sum = a + b;
    return sum;
}

doSomething(add);
doSomething(add());

function printHello() {
    console.log('Hello');
}

printHello();

function printMsg(message) {
    console.log(message);
}

printMsg('hi');
printMsg(1234);

function changeName(obj) {
    obj.name = 'byms';
}

const gbsw = { name: 'gbsw' };
console.log(gbsw);
changeName(gbsw);
console.log(gbsw);

function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

function showMessage2(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!!');

function showMessage3(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage3('Hi!!!');

function printAll(...args) {
    console.log('1번째방법');
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    console.log('2번째방법');
    for (const arg of args) {
        console.log(arg);
    }

    console.log('3번째방법');
    args.forEach((arg) => console.log(arg));
}

printAll('red', 'green', 'blue', 'white', 'black');

let glabalMessage = 'global';

function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(glabalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'good luck';
        console.log(childMessage);
    }
    printAnother();
    //console.Log(childMessage); //error
    return undefined; //리턴값이 없는 모든함수에 생략되어 사용
}
printMessage();

console.log(`sum: ${sum(3, 4)}`);

function sum(a, b) {
    return a + b;
}
const result3 = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);
console.log(`sum: ${result}`);

function upgradeUser(user) {
    if (user.point > 10) {
    }
}

function upgradeUser(user) {
    if (user.point > 10) {
        return;
    }
}
