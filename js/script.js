"use strict";

// Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < len(arr); i++) {
//         result[i] = arr[i]
//     }
    
//     // Не трогаем
//     return result;
// }



// console.log(firstTask())

// const arr = [3, 5, 8, 16, 20, 23, 50];

// console.log(arr.length)

// const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) == String) {
//         data[i] += ' - done';
//     } else {
//         data[i] *= 2;
//     }
// }

// console.log(typeof(data[2]))

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
    
// for (let i = 0; i < data.length; i++) {
//     result[i] = data[data.length - 1 - i]; 
// }

// console.log(result)


// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней


// let stars = '*';
//     for (let i = 1; i <= lines + 1; i++){
//         for(let j = lines + 1 - i; j > 0; j--) {
//             result += ' ';
//         }
//         result += stars + '\n'
//         stars += '**';
//     }

// console.log(result);

// function showMessage(text) {
//     console.log(text);
// }

// showMessage("ilikeyou");
// console.log(addTwoNums(23, 33));
// function addTwoNums(a, b) {
//     return a + b;
// }



// console.log(addTwoNums(1, 9));
// console.log(addTwoNums(3, 2));

// const logger = function (text) {
//     console.log(text);
// };
// logger("iwantyourlove");


// const calc = (a, b) => a * b;

// console.log(calc(20, 3));
// function getMathResult(num, progr) {
//     if (typeof(progr) === 'string' || progr <= 0) {
//         return num;
//     } else {
//         let result = `${num}`
//         let progrNum = num;
//         for (progr; progr > 1; progr--) {
//             progrNum += num;
//             result += `---${progrNum}`; 
//         }
//         return result
//     }
// }

// console.log(getMathResult(7, 7))


// const str = "Hello world!";

// console.log(str.toUpperCase());

// console.log(str);

// console.log(str.slice(6));

// console.log(str.substr(2, 6));

// console.log(str.indexOf('q'))

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// function cubeVolumeAndSurface(num) {
//     const cubeVolume = num*num*num; 
//     const cubeSurfaceArea = 6*(num*num);
//     if (typeof(num) != 'number' || num % 1 !== 0 || num <= 0) {
//         return "При вычислении произошла ошибка";
//     } else {
//         return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeSurfaceArea}`
//     }
// }

// console.log(cubeVolumeAndSurface(5));


// function getCoupeNumber (sitNum) {
    
//     if (sitNum % 1 !== 0 || sitNum < 0 || sitNum === "string") {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
    
//     if (sitNum === 0 || sitNum > 36) {
//         return "Таких мест в вагоне не существует";
//     }
    
//     if (sitNum % 4 === 0) {
//         return sitNum / 4;
//     } else {
//         return parseInt(sitNum/4+1);
//     }
// }

// console.log(getCoupeNumber(7));

// function fib(num) {
//     let result = `0, 1`
    
//     let fibArr = [0, 1]
    
//     switch (num) {
//         case 0:
//             return "";
//         case 1:
//             return "0";
//         case 2: 
//             return result;
//     }
//     for (let i = 0; i < num-2; i++) {
//         const nextFibNum = fibArr[0] + fibArr[1];
//         result += `, ${nextFibNum}`;
//         fibArr.shift();
//         fibArr[1] = nextFibNum;
//     }
//     return result
// }

// console.log(fib(10));

// function JSLearning(language, callback) {
//     console.log(`я вчу: ${language}`);
//     callback();
// }

// function learningLeson() {
//     console.log("Я вивчив цей урок");
// }

// JSLearning("Javascript", learningLeson);

// const obj = {
//     name: "abc",
//     width: 1024,
//     height: 1024,
//     music: "In this shirt",
//     colors: {
//         border: "red",
//         bg: "black"
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// }

// console.log(obj.name);

// delete obj.name;

// console.log(obj);

// for (let key in obj) {
//     if (typeof(obj[key]) === 'object') {
//         for (let k in obj[key]) {
//             console.log(`Ключ: ${k}, значення: ${obj[key][k]}`);
//         }
//     } else {
//         console.log(`Ключ: ${key}, значення: ${obj[key]}`);
//     }
// }

// console.log(Object.keys(obj))


// obj.makeTest();

// const {border, bg} = obj.colors;

// console.log(border, bg)

// const arr = [1, 21, 11, 33, 5]

// arr.forEach(function(item, i, arr) {
//     console.log(`Item: ${item}, Number: ${i} In array: ${arr}`);
// })

// arr.pop();
// arr.push(7);

// console.log(arr);

// const usersWords = prompt("", "")
// const usersArr = usersWords.split(", ")

// console.log(usersArr.sort());

// const mainObj = {
//     a: 5,
//     b: 19,
//     c: {
//         x: 0,
//         y: 1
//     }
// }

// const newObj = {...mainObj};

// newObj.a = 10;

// console.log(mainObj);
// console.log(newObj);

// function copy(obj) {
//     let newObj = {};

//     for (let key in obj) {
//         newObj[key] = obj[key];
//     }
//     return newObj;
// }

// console.log(mainObj);
// const newObj = copy(mainObj);
// newObj.a = 10;

// console.log(newObj);

// const add = {
//     d: 2,
//     e: 3
// }

// console.log(Object.assign({}, add));

// add.d = 4;

// console.log(add);

// const oldArray = ["a", 'b', "c"];

// const oldNewArray = ["d", "e"];

// const newArray = [...oldArray, ...oldNewArray, "f", "g"];

// console.log(newArray)

// const newArray = [...oldArray];

// newArray[1] = "d";

// console.log(oldArray);
// console.log(newArray);


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showProgrammingLangs(data) {
//     const {programmingLangs} = personalPlanPeter.skills;

//     let result = "";

//     for (let key in programmingLangs) {
//         result += `Язык: ${key} изучен на${programmingLangs[key]} `
//     }

//     return result.trim();
// }

// console.log(showProgrammingLangs(personalPlanPeter));


// const someString = 'This is some strange string';

// function reverse(data) {
//     let result = '';
//     for (let i = data.length - 1; i >= 0; i--) {
//         result += data[i];
//     }
//     return result;
// }

// let result = '';
//     for (let i = data.length; i > 0; i--) {
//         result += data[i];
//     }
// console.log(reverse(someString));

// console.log(someString[2]);


const soldier = {
    health: 400,
    armor: 100,
    skills: {
        gun: 50,
        agility: 30
    }
}

const john = Object.create(soldier);

john.health = 100;
console.log(john.armor, john.health)