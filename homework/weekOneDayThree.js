// 1. Write a function that multiplies two numbers. Invoke the function.

function multiplyNums(num1, num2){
    return num1 * num2;
}

 const result = multiplyNums(5,4);
 console.log(result);



// 2. Write a function named assignGrade, that takes one argument, a number score (example: 90).
// Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
// Invoke that function for a few different scores and log the result to make sure it works for each case.

function assignGrade(grade) {
    const res = (grade >= 90) ? "A" : (grade >= 80) ? "B" : (grade >= 70) ? "C" : (grade >= 60) ? "D" : "F";
    return res;
}
const gradeRes = assignGrade(90);
console.log(gradeRes);



// 3. Write an array containing items of the same data type.

const groceryList = [
    "cereal",
    "bread",
    "rice",
    "oranges",
    "apples",
    "coffee",
    "cold cuts"
]

//console.log(groceryList);


// 4. Write a function to get the first element in an array. Invoke the function. 

function getFirstElement(arr){
    return arr[0];
} 

const firstElementRes = getFirstElement(groceryList);
console.log(firstElementRes);





