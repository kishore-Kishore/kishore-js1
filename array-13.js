// You have an array of integers. Write a function that returns the count of the even numbers in the array.
let integersarray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
function countEvennumber(numbers){
 return numbers.filter(number => number % 2 == 0).length;
}
let evencount=countEvennumber(integersarray);
console.log(`count of even number: ${evencount}`)