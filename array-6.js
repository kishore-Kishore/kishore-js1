// Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of days left until an important festival, find the closest upcoming festival.

// let days_until_festival=[30, 15, 45, 10, 25];

// let end= days_until_festival[0];
// for(i=0;i<days_until_festival.length;i++){
//     if(days_until_festival[i] < end){
//      end=days_until_festival[i];
//     }
// }
// console.log("the cloesest  up coming festival",end);


// let word="Madam"
// let letter=word.split("").
//             reverse().
//             join("")
// console.log(letter);


// let str=[1,2,3,4,5];
// let array=str.join(" ");
// console.log(array)



// let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// let evenNumber=[];
// let oddNumber=[];

// for(i=0;i<array.length;i++){
//   if(array[i]%2==0){
//     evenNumber.push(array[i])
//   }
//   else{
//     oddNumber.push(array[i])
//   }
// }
// let result=evenNumber.concat(oddNumber);
// // console.log(evenNumber)
// // console.log(oddNumber)
// console.log(result);




// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let evenNumber = [];
// let oddNumber = [];

// // Loop through the entire array
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         evenNumber.push(array[i]); // Push even numbers
//     } else {
//         oddNumber.push(array[i]); // Push odd numbers
//     }
// }

// // Concatenate even and odd arrays
// let result = evenNumber.concat(oddNumber);

// // Print the result
// console.log(result);



// function linf(arr, positions) {
//     // Normalize positions in case it's greater than array length
//     positions = positions % arr.length; 
//     return arr.slice(positions).concat(arr.slice(0, positions));
// }

// let  arrays = [1, 2, 3, 4, 5];
// let  rotatedLeft = linf(arrays, 2); // [3, 4, 5, 1, 2]
// console.log(rotatedLeft);


// let arrays = [1, 2, 3, 4, 5];
// let rotatedLeft =(arrays, 3); // [4, 5, 1, 2, 3]
// console.log(rotatedLeft);



// function leftRotate(arr, positions) {
//     positions = positions % arr.length; // Normalize positions
//     // Step 1: Reverse the entire array
//     reverse(arr, 0, arr.length - 1);
//     // Step 2: Reverse the first part (0 to positions - 1)
//     reverse(arr, 0, positions - 1);
//     // Step 3: Reverse the second part (positions to end)
//     reverse(arr, positions, arr.length - 1);
// }

// // Example usage:
// let arrays = [1, 2, 3, 4, 5];
// let a=leftRotate(arrays, 3); // The original array is modified
// console.log(a); // Outputs: [4, 5, 1, 2, 3]














// function leftRotate(arr, positions) {
//     const n = arr.length; // Length of the original array
//     positions = positions % n; // Normalize positions

//     // Create a new array to hold the rotated values
//     let rotatedArray = new Array(n);

//     // Fill the new array with the rotated values
//     for (let i = 0; i < n; i++) {
//         rotatedArray[i] = arr[(i + positions) % n];
//     }

//     return rotatedArray; // Return the new rotated array
// }

// // Example usage:
// let arrays = [1, 2, 3, 4, 5];
// let rotatedLeft = leftRotate(arrays, 3); // [4, 5, 1, 2, 3]
// console.log(rotatedLeft);



// function leftrotation(arr,positions){
//     positions=positions % arr.length;
//     let remove = arr.slice(0,positions);
//     arr.splice(0,positions);
//     arr.push(...remove); 
// }
// let arrays=[1,2,3,4,5,6,7];
// leftrotation(arrays,5)
// console.log(arrays);


// let x = 10;
// console.log("x="+ x);

// let pi = 3.14;
// console.log("pi=" + pi);

// let name = "Rajnikanth" 
// console.log("My name is " + name);
// let ageStr = "23";
// let ageNum = parseInt(ageStr) + 20;
// console.log(ageNum)

// //Converting Str to Float
// let piStr = "3.14";
// let piFloatNum = parseFloat(piStr);
// console.log(piStr)


// // Converting Float to Int
// let numF = 31.01;
// console.log(numF);

// //Remove the fractional digits
// let numInt = Math.trunc(numF);
// console.log(numInt);




// let price = 200;
// let taxInPercentage = 8;
// let taxAmount = (price * taxInPercentage ) / 100;

// let totalAmount = price + taxAmount;

// console.log("The total amount is " + totalAmount);

// let n = 35;

// let remainder = n % 3;

// console.log("N%3 is " + remainder);


// let length = 20;
// let breadth = 10;
// // Area of a rectangle is length * breadth
// let area = length * breadth;


// console.log("Area of a rectangle: " + area);


// Find is the code is doing and what should is it missing
// let len = 10;
// let breadth = 3;
// let area = len * breadth;
// console.log("Area of the rectangle: " + area);

// let mark = 75;

// if (mark >= 75) {
//                         console.log("You got an A grade");
// } else if(mark >= 60) { 
//         console.log("You got an B grade");
// } else if(mark >= 45) { 
//         console.log("You got an C grade");
// } else {
//         console.log("You didn't get an A, B or C grade");
// }


// let char='A'

// if (char == 'a'|| char=='A') {
//   console.log('The character is a.');
// } else if (char === 'b') {
//   console.log('The character is b.');
// } else {
//   console.log('The character is something else.');
// }

// function isLeapYear(a) {
//     if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
//         console.log("Y");
//     } else {
//         console.log("N");
//     }
// }
// isLeapYear(400)

// function isEven(num) {
//     if(num%2 == 0) {
//         console.log("even");
//     }
//     else {
//         console.log("not even");
//     }
// }
// isEven(100)

// let teamscore=180;
// let targetscore=160;
// let overleft=0;
// function Dlmethod(teamscore,targetscore,overleft){
// if(teamscore>=targetscore){
//      console.log("this team win dl method")
// }
// else if(targetscore < teamscore && overleft>5){
//        console.log("match to be continued");
// }
// else if(teamscore < targetscore && overleft ==0) {
//     console.log("match lost")
// }
// }
// Dlmethod(teamscore,targetscore,overleft)

// function maxOfThree(a, b, c) {
//     if(a > b && a > c) {
//         console.log(a);
//     }
//     else if (b > a && b > c) {
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }
// maxOfThree(10,30,5);

// function isBetween(n, l , r) {
//     if(n > l && n < r) {
//         console.log("yes");        
//     }
    
//     else {
//         console.log("no");
//     }
// }
// isBetween(3,2,6);


// function isEven(num) {
//     if(num%2 == 0) {
//         console.log("even");
//     }
//     else {
//         console.log("not even");
//     }
// }
// isEven(2);
// isEven(5)

// function isLeapYear(a) {
//     if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
//         console.log("Y");
//     } else {
//         console.log("N");
//     }
// }
// isLeapYear(4);
// isLeapYear(100);
// isLeapYear(400);

// function leftrotation(arr,positions){
//     positions=positions % arr.length;
//     let remove = arr.slice(0,positions);
//     arr.splice(0,positions);
//     arr.push(...remove); 
// }
// let arrays=[1,2,3,4,5,6,7];
// leftrotation(arrays,4)
// console.log(arrays);


// let count = 5;

// while (count >= 1) {

//     console.log(`Count is: ${count}`);

//     count--;

// }
// console.log("finished")

// let i = 1;
// let text=0;
// do {
//   text += "The number is " + i;
//   i++;
// }
// while (i <=11){
//     console.log(i)
// }

// function nReverse(n) {
//     let i = n;
//     while (i >=1) {
//        console.log(i);
//        i--;
//     }
//     console.log("finished")
// }
// nReverse(100)

// function printBetween2Nums(a, b){
//     let i=a;
//     while(i<=b){
//      console.log(i);
//      i++;
//     }
//     console.log("its over")
// }
// printBetween2Nums(1,5)

// function printSeries(n){
//     let i=1;
//     while(i<=n){
//            console.log(i*i)
//    i++;
//     } 
// }
// printSeries(5)

// function sumOfNEven(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=(2*i);
//         console.log(sum)
//     }
   
// }
// sumOfNEven(5)

// function sumOfNEven(n) {
//     let sum = 0; 
//     for(let i = 1; i <= n; i++) {
//         sum += (2 * i);
//         console.log(sum);
//     }
  
// }
// sumOfNEven(5)

// function printAllMultiplesOf5Bet(a, b) {
//     let i = a;
//     let str = "";
//     for (i = a; i <= b; i++) {
//         if(i%5 === 0) {
//             str += `${i}, `;

//         }
//     }
//     str = str.slice(0, str.length-1);
//     console.log(str);
// }
// printAllMultiplesOf5Bet(5,30);
// printAllMultiplesOf5Bet(15,20)

// function greetByNames(fname, sname) {
//     return `Welcome ${fname} and ${sname}`;
   
// }
//  console.log(greetByNames("Ram","Raheem"));
//  console.log(greetByNames("kishore","ekkrjg"));

// function areaofreactangle(length,breath){
//      let area =length*breath;
//      return area;
// }
// console.log( areaofreactangle(100,10));
   

// function findDuplicates(arr) {
//     let seen = []; // Array to keep track of seen numbers
//     let duplicates = []; // Array to store duplicates

//     for (let num of arr) {
//         // Check if the number has been seen before
//         if (seen.includes(num)) {
//             // If it's a duplicate and not already added
//             if (!duplicates.includes(num)) {
//                 duplicates.push(num);
//             }
//         } else {
//             seen.push(num); // Add the number to seen array
//         }
//     }

//     return duplicates;
// }

// let array = [1, 2, 3, 4, 1,2,3];
//  duplicates = findDuplicates(array);
// console.log(duplicates);