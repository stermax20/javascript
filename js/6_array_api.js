'use strict';

console.log('make a string out of an array : join');
{
    const fruits = ['apple', 'banana', 'orange'];

    const result = fruits.join(',');
    console.log(result);
}

console.log('make a array out of a string : split');
{
    const fruits = ['apple', 'kiwi', 'banana', 'shine_muscat'];

    const result = fruits.join(',');
    console.log(result);
}

console.log('make this array look like this: [5, 4, 3, 2, 1] : reverse');
{
    const array = [1, 2, 3, 4, 5];

    const result = array.reverse();
    console.log(result);
    console.log(array);
}

console.log('make new array without the first two elements : slice');
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

console.log('find a student with the score 90 : find');

console.clear();
{
    console.log('----find----');
    const findresult1 = students.find(function (student, index) {
        console.log(student, index);
    });
    console.log(findresult1);

    const findresult2 = students.find(function (student) {
        return student.score === 90;
    });
    console.log(findresult2);
}

console.log('--find arrow func -----');
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

console.log('make an array of enrolled students : filter');
{
    console.log('-- filter --');
    const result = students.filter(function (student) {
        return student.enrolled;
    });
    console.log(result);
}

console.log('--fileter arrow func --');
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

{
    console.log('-- filter2 --');
    const result = students.filter(function (student) {
        return student.age >= 30;
    });
    console.log(result);
}

console.log("make an array containing only the students' scores : map");
{
    const result = students.map(function (student) {
        return student.score;
    });
    console.log(result);
}
console.clear();
console.log('check if there is a student with the score lower than 50 : some, every');

{
    const result = students.map((student) => student.score);
    console.log(result);
}

{
    console.log('-- some --');
    const result = students.some(function (student) {
        return students.score >= 50;
    });
    console.log(result);
}

{
    console.log('--- some arrow fn ---');
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}

console.log("compute students' average score : reduce, reduceRight");
{
    const result = students.reduce(function (prev, curr) {
        console.log(prev);
        console.log(curr);
        console.log('--------');

        return prev + curr.score;
    }, 0);

    console.log(result / students.length);
}

{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

console.log('make a string containing all the scores ');

{
    const result = students.map((student) => student.score).join(',');
    console.log(result);
}

{
    const result = students
        .map((student) => student.score)
        //    .filter((score) => score >= 50)
        .join();
    console.log(result);
}

console.log('sorted in ascending order');

{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(result);
}
