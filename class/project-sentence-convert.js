/*
objective: to create a functiont that converts a string to a friendly sentence.
-string method: toLowerCase(), toUpperCase(), trim(),
-arrow function
*/

const convertSentence = text => {

    //normalize
    const lowerText = text.toLowerCase();
    const upperFirst = lowerText[0].toUpperCase();
    const finalText = upperFirst + lowerText.substring(1);
    return finalText;

}
const sentence = "type Better PleAse!";
const result = convertSentence(sentence);
console.log("original:", sentence);
console.log("result:", result);