

// 1.   Write a switch statement that takes an animal and logs the sound that animal makes to the console. 
//      Include at least 3 animals. Invoke the function.






function getAnimalSound(animal){
    
    switch(animal){

        case 'dog':
            console.log('woof');
            break;
        
        case 'cat':
            console.log('meow');
            break;

        case 'lion':
            console.log('roar');
            break;
        
            default:
                console.log('animial not available');
    }
}

getAnimalSound('bear');

// 2.   Write a function that takes the name of a fruit and logs the color of that fruit to the console. 
//      Use an if-else statement. Include at least 4 fruit options.  Invoke the function.

function getFruitColor(fruit){
    if(fruit === 'apple'){
        console.log('red');
    }
    else if(fruit === 'orange'){
        console.log('orange');
    }
    else if(fruit === 'banana'){
        console.log('yellow');
    }
    else if(fruit === 'pear'){
        console.log('green');
    }
    else{
        console.log('Fruit not listed');
    }
}

getFruitColor('apple');


// 3.   Write a function that adds two numbers together.  Invoke the function.

function addNumbers(num1, num2){
    const sum = num1 + num2;
    return sum;
}


const res = addNumbers(14, 10);
console.log(res);
