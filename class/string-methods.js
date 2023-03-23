//LENGTH PROPERTY****
const strLength = () => {
    const string = "great idea Megan!!";
    console.log("str length:", string.length);


}

strLength();

//TO UPPERCASE METHOD***
const toUpper = () => {
    const str = "local scope";
    console.log("To Upper Case:", str.toUpperCase());
}

toUpper();

//TRIM METHOD***
const strTrim = () => {
    const str = "   Hello this is Major Tom  ";
    console.log("str trim:", str.trim());
}
strTrim();

//REPLACE METHOD***
const strReplace = () => {
    const str = "I didn't sleep much last night";
    const subject = "sleep much";
    const replace = "eat anything";
    console.log("str replace:", str.replace(subject, replace));
}
strReplace();

//SUBSTRING METHOD***
const strSubstring = () => {
    const str = "I like big fonts and i cannot lie";
    console.log("substring: ", str.substring(7, 15));
}
strSubstring();

//SUBSTRING 2 METHOD***
const strSubstring2 = () => {
    const str = 'hello';
    console.log("substring2: ", str.substring(1));
}
strSubstring2();

//startsWith()
//endsWith()
//indcludes()
//indexOf()

//SPLIT***
const strSplit = () => {
    const str = "i like starwars. ho purr";
    console.log("split: ", str.split(" "));
}
strSplit();


const isPalindrum = str => {
    const charArr = [];
    const strLowerCase = str.toLowerCase();
    const strRemoveSpace = strLowerCase.replace(/[" "]/g, "");
    for(let i = strRemoveSpace.length-1; i >= 0; i--){
        charArr.push(strRemoveSpace.charAt(i));
    }
    let reverseStr = "";
    for(let i = 0; i < charArr.length; i++){
        reverseStr = reverseStr + charArr[i];
    }
    const res = (strRemoveSpace === reverseStr) ? true : false;
    return res;
}

const strRes = isPalindrum('do geese see god');
console.log(strRes);
