//Write a function that takes a number of adults, number of children, and
//the number of beds in a vacation home and returns true if there are enough
//beds and false if not.  Assume that adults will sleep 2 to a bed.


function enoughBeds(numAdults, numKids, numBeds){
    
    //Divide the number of adults by 2
    const adultBeds = numAdults / 2;
    
    //Add that to the number of kiddos
    const totalBedsNeeded = adultBeds + numKids;
    
    //Is that result <= number of beds
    return (totalBedsNeeded <= numBeds);
}

//console.log(enoughBeds(9,4,8));

const canWeFit = enoughBeds(8,4,5);
console.log("Can we fit?", canWeFit);
