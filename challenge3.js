//  1. Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized.
//   For example, if you were given "Turing is the best", return "Turing Is The Best" instead!
// Ok, 2 ways i can think of
// First, have a string that is the sentence. Break up the string into each word, then capitalize the first letter of the word
// Then, put the string back together, and print it.
// I'd put each word in an array, since then i can iterate through it, and capitalize each letter
// Second, maybe for loop, for each space " " in string, capitalize the letter after it? then print it? 
// Maybe use replace() method, need to read documentation

//replace(searchValue, newValue)

//Future matt here, can use a RegEX to make a filter to find the first letter of each word and replace
// I'll do this twice since I not sure i understand this, but here we go

// var string = "blah blah blah"
// var newString = string.replace(RegEx to filter, change letter to letter.toUpperCase)

var sentenceToChange = "my name is Matthew shindel, you stole my lunch, prepare to die."
console.log(sentenceToChange); // testing the sentence before
var newSentence = sentenceToChange.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
console.log(newSentence); // testing the sentence after

//OMG it worked, thank you google
// Had to look a lot of this up, but this is what I found, and what the RegEx does

