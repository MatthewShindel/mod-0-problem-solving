//  1. Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized.
//   For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

//Overall Goal: Make first letter of each word capitalized in sentence
// Ok, 2 ways i can think of
// First, have a string that is the sentence. Break up the string into each word, then capitalize the first letter of the word
// Then, put the string back together, and print it.
// I'd put each word in an array, since then i can iterate through it, and capitalize each letter
// Second, maybe for loop, for each space " " in string, capitalize the letter after it? then print it? 
// Maybe use replace() method, need to read documentation

// replace(searchValue, newValue)

// Future matt here, can use a RegEX to make a filter to find the first letter of each word and replace
// I'll do this twice since I not sure i understand this, but here we go

// var string = "blah blah blah"
// var newString = string.replace(RegEx to filter, change letter to letter.toUpperCase)

var sentenceToChange = "my name is Matthew shindel, you stole my lunch, prepare to die.";
console.log(sentenceToChange); // testing the sentence before
var newSentence = sentenceToChange.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
// identify each word in the sentences, specifically the first letter in each word, then changes that letter to uppercase
console.log(newSentence); // testing the sentence after

// OMG it worked, thank you google
// Had to look a lot of this up, but this is what I found, and what the RegEx does
// Website used:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// https://regexr.com/
// https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/
// Here's what each part does:
// first "/" is to open the RegEx
// ^ matches the beginning of the string.
// \w matches any word character.
// {1} takes only the first character.
// Thus, ^\w{1} matches the first letter of the word.
// | works like the boolean OR. It matches the expression after and before the |.
// \s+ matches any amount of whitespace between the words (for example spaces, tabs, or line breaks).
// Finally, the "/g" at the end close the RegEx, and searches the whole sentence

// I'm gonna try it a differeny way, since that felt cheap, but cool

// var sentence = "blah blah blah"
// var arrayofwords = sentence.split(" ")
// for eac item in arrayofwords{
//  var newWord = arrayofwords[i][0].toUpperCase
//  put each newWord back together
//     
//}

var sentenceToChange = "my name is Matthew shindel, you stole my lunch, prepare to die.";
var arrayOfWords = sentenceToChange.split(" ");
console.log(arrayOfWords);
// make sure that I retrieved all of the words out of the original sentence
for (var i = 0; i < arrayOfWords.length; i++){
    arrayOfWords[i] = arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].substring(1);
    // for each element in the array, which are each a single word, I take a first letter of the word and captialize it
    // then, I add it back to the back to the original work, using substring to remove the first letter of the word
}
var completeSentence = arrayOfWords.join(" ");
console.log(completeSentence);
