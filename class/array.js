const guestList = [
    "Father", //0
    "Son", //1
    "HolyGhost", //2
    "paul", //3
    "mark", //4
    "isaac", //5
    "jose" //6

]

// console.log(guestList);

// const totalCount = guestList.length;
// const thirdGuest = guestList[2];
// console.log("Third Guest:", thirdGuest);

// console.log(guestList.indexOf('Father'));
// console.log("Third guest total Count: ", totalCount);

// const lastIndex = guestList[guestList.length - 1];
// console.log(lastIndex);

const foodItems = [
    "steak",
    "chicken wings",
    "hamburger",
    "pizza",
    "arroz con pollo"
]

// console.log(foodItems);
// const len = foodItems.length;
// console.log(len, foodItems);


// const sayHello = () => console.log('hello');

// const sumNums = (num1, num2) => num1 * num2;

// const hi = sayHello();

// const addNums = sumNums(2,3);
// console.log(addNums);


const arr = [2, 16, 5, 8];

//const arrFunc = arr.reduce((a, c) => a + c, 0);

//const arrMax = arr.reduce((a, c) => a > c ? a : c, 0);

//const arrMin = arr.reduce((a, c) => a < c ? a : c, Number.MAX_VALUE);

const arrMultiply = arr.map((a, b) => a + 2);

const res = arrMultiply;
console.log(res);

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;


const calc = (num1, num2, func) => {
    return func(num1, num2);
}

const result = calc(5,7,multiply);
console.log(result);