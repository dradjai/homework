const sampleArray = [
    "yellow flower",
    "red cup",
    "white shirt",
    "pink shoes",
    "black bag"
]

console.log(sampleArray);

//PUSH() - add element at end
//POP() - remove last element
//SHIFT() - remove first element
//UNSHIFT() - adds element in first index
//LENGTH() - returns length of array

console.log("length: ", sampleArray.length);
console.log("pop: ", sampleArray.pop());
console.log(sampleArray);
console.log("**********************");
console.log("push: ", sampleArray.push('Florida State'));
console.log(sampleArray);
console.log("**********************");
console.log("unshift: ", sampleArray.unshift("blue sweater"));
console.log(sampleArray);
console.log("**********************");
console.log("shift: ", sampleArray.shift());
console.log(sampleArray);

