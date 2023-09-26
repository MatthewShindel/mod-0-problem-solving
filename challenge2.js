// 1. Start with an array of travel destinations.
// Print every travel destination in alphabetical order embedded in a sentence using string interpolation
//  For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"


// Make array of destinations, sort them in alphabetical order, then print each element in array inside another string
// var arrayofDestinations = [stuff, more stuff]
// var newArray = arrayofDestinations.sort()
// for each element in newArray
// console.log(The next place I want to visit is  + newArray[i] !)

var arrayDestination = ["Zimbabwe", "New York","China", "Mumbai", "Shanghai", "Brazil","Switzerland"];
var arraySorted = arrayDestination.sort();
for (var i = 0; i < arraySorted.length; i++){
    console.log(`The next place I want to visit is ${arraySorted[i]}!`)
}
