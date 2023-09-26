// Solve at least 3 of the challenges below. 
// Create a file using the language for your program (`challenge1.rb` or `challenge1.js`) for each of the challenges you select.
// For each challenge you complete, include comments showing the **overall goal** in your own words, 
// your **pseudocode**, and your **final solution**. 



// 1. Given an array of strings, print only the strings that have exactly 4 characters.
// Goal: make and array of strings, if the length of string is exactly 4, then print it out
// var array = [stuff, more stuff, stuff]
// for (each item in array){
// if the string at specific index is === 4
// print out value with console log
//}

var arrayString = ["Paul", "Duncan", "Pete", "Cat", "Dog", "2345"];
for (var i = 0; i < arrayString.length; i++){
    if (arrayString[i].length === 4){
        console.log(arrayString[i]);
    }
}
