'use strict';

console.log('1. Object to JSON-----------------------------');
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const puppy = {
    name: 'aivo',
    color: 'silver',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol("id"),
    learn: function () {
        console.log(`${this.name} can learn!`);
    },
};

json = JSON.stringify(puppy);
console.log('puppy to json:', json);
// 함수, symbol 처리 안됨

json = JSON.stringify(puppy, ['name', 'color', 'size']);
console.log(json);

console.log('stringify~~~~');
json = JSON.stringify(puppy, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json);

json = JSON.stringify(puppy, (key, value) => {
    return key === 'name' ? 'gbsw' : value;
});
console.log(json);

console.log('2. JSON to Object--------------------------');

json = JSON.stringify(puppy);
console.log(json);
const obj1 = JSON.parse(json);
console.log(obj1);
puppy.learn();
//obj1.Learn();

console.log(puppy.birthDate.getDate());
//console.log(obj1.birthDate.getDate());

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key;
});
console.log(puppy.birthDate.getDate());
//console.log(obj2.birthDate.getDate());

console.log('parse~~~~');
const obj3 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(puppy.birthDate.getDate());
console.log(obj3.birthDate.getDate());

// JSON Diff : https://www.jsondiff.com/
// JSON Beautifier : https://jsonbeautifier.org/
// JSON Parser : https://jsonparser.org/
// JSON Validator : https://tools.learningcontainer.com/json-validator/
// Javascript.info KOR : https://ko.javascript.info/json
// Javascript Quiz : https://www.freecodecamp.org/korean/news/javascript-projects-for-beginners/#how-to-create-an-image-slider
