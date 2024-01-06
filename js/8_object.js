'use strict';

console.log('// 1. Literals and properties ----------------------');

const name = 'gbsw';
const age = 17;

function print(name, age) {
    console.log(name);
    console.log(age);
}
print(name, age);

function print1(person) {
    console.log(person.name);
    console.log(person.age);
}

const gbsw = { name: 'gbsw', age: 17 };
print1(gbsw);

const obj1 = {};
const obj2 = new Object();

gbsw.tel = '010-1234-5678';
console.log(gbsw.tel);

delete gbsw.tel;
console.log(gbsw.tel);

console.log('// 2. Computed properties --------------------------');
console.log(gbsw.name);
console.log(gbsw['name']); //run time, string type
console.log(gbsw.email);

gbsw['email'] = 'user@gbsw.edu';
console.log(gbsw.email);

function printValue(obj, key) {
    //console.log(obj.key);
    console.log(obj[key]);
}

printValue(gbsw, 'name');
printValue(gbsw, 'age');

// console.clear();

console.log('3. Property value shorthand -------------------------');
const person1 = { name: 'lee', age: 11 };
const person2 = { name: 'kim', age: 22 };
const person3 = { name: 'park', age: 33 };

function makePerson(name, age) {
    return {
        name: name, //name,
        age: age, //age,
    };
}

const person4 = makePerson('hong', 44);
console.log(person4);

console.log('4. Constructor Function -----------------------------');
function Person(name, age) {
    // this = {}
    this.name = name;
    this.age = age;
    // return this;
}
const person5 = new Person('son', 40);
console.log(person5);

console.log('5. in operator -------------------------');
console.log('name' in gbsw);
console.log('age' in gbsw);
console.log('something' in gbsw);
console.log(gbsw.something);

console.log('6. for..in vs for..of --------------------');
// for (key in obj)
for (let key in gbsw) {
    console.log(key);
}

// 배열요소인 경우
const array = [1, 2, 3, 4, 5];
array.name = 'gbsw';
console.log('array:', array);

for (let key in array) {
    console.log(key);
}

// for (value of iterable)
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for .. of (배열요소를 순회할 때 사용)
for (let value of array) {
    console.log(value);
}

console.log('7. Object.assign -----------------------------');

const user = { name: 'gbsw', age: '17' };
const user2 = user;

user2.name = 'hong';
console.log(user);

//copy
// old
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log('user3:', user3);

//new ... object.assign()
const user4 = {};
Object.assign(user4, user);
console.log('user4:', user4);

const user5 = Object.assign({}, user);
console.log('user5:', user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
