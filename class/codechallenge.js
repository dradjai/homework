
//(adults * 3) / 8

//input -- adults
//return -- numOfPizzas

function getNumOfPizzas(adults){

    //write the formula
    return Math.ceil((adults * 3) / 8);
  

}

const numBoxes = getNumOfPizzas(6);
console.log(numBoxes);