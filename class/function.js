//function declaration
function message(firstName){
    console.log('hello ' + firstName);
}
function getMeow(){
    console.log('meow');
}

const getSumTotal = (firstNum, secondNum) => firstNum + secondNum;

const printName = name => 'Hello ' + name;

console.log(printName('David'));   

const sayHello = () => console.log('Hello my friend');

sayHello();


function makePie(quantity){
    const pie = '🍰'.repeat(quantity);
    console.log(pie);
}

function makeAnimal(animal, quantity){
    const result = animal.repeat(quantity);
    return result;
}

function generateLoudSpeaker(text){
    const textRes = '🔊 ' + text.toUpperCase();
    return textRes;
}

const res = generateLoudSpeaker('whisper');
console.log(res);


//makePie(4000);

// const res = makeAnimal('🐕', 5);
// console.log(res);

//invoke/call function
// message('David');
// message('cat who are you?');
// getMeow();
// getSumTotal(2, 5);
 console.log(getSumTotal(25, 50));
// getSumTotal('4','5');
// getSumTotal("David", "Radjai");

