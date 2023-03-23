// 1. What is the technical term used to create a variable in JavaScript?
//    Declare a variable


// 2. What is the technical term used to call or execute a function in JavaScript?
//    invoke a function


// 3. Create an object called student, including 3 properties with their values.

    const student = {
        studentId: 1,
        studentName: "David",
        studentEmail: "dradjai@yahoo.com"

    }



// Create a function that removes the first element of the array below and adds “kiwi” to the end of the array.

   
//let favoriteFruits = [“mango”, “lychee”, “strawberry”, “papaya”] 

let favoriteFruits = [
    "mango",
    "lychee",
    "strawberry",
    "papaya"
]

const arrManipulate = arr => {
    arr.shift();
    arr.push('Kiwi');
    return arr;
}

const arrRes = arrManipulate(favoriteFruits);
console.log(arrRes);


