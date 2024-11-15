// // Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.

let  devices = ["Phone", "Tablet", "Laptop"];


let  index = devices.indexOf("Laptop");


if (index !== -1) {
    console.log(`The index of "Laptop" is: ${index}`);
} else {
    console.log('"Laptop" is not found in the array.');
}





let mixedArray = ["John", 25, true];
   console.log(mixedArray[1],mixedArray[0],mixedArray[2]);




   let nestedArray = [["a", "b", "c"], [1, 2, 3], [true, false]];
   console.log(nestedArray[1][2]);



let movies = ["Inception", "Interstellar", "The Matrix"];
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}