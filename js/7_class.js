'use strict';

// console.log("1. Declarations ----------------------------");
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   speak() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// const gbsw = new Person("gbsw", 17);
// console.log(gbsw.name)
// console.log(gbsw.age)
// gbsw.speak();

console.log('// 2. Getter and setters ------------------');
class User {
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.lastName = LastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error("age can not be negative");
        // }
        // else{
        //     this._age = value;
        // }
        this._age = value < 0 ? 0 : value;
    }
}

console.log('// 5. Inheritance ---------------------');

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color----------`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
    draw() {
        super.draw();
        console.log(`🔺`);
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(10, 10, 'red');
rectangle.draw();
const triangle = new Triangle(10, 10, 'white');
triangle.draw();

console.log(rectangle.getArea());
console.log(triangle.getArea());

console.log('// 6. instanceOf operator ------------------');
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);

console.log(triangle instanceof Object);
