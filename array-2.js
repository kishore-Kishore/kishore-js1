// Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.

// let seats =[1, 0, 1, 1, 0 , 0, 1, 0];

// let  available= seats.filter(seats=>seats==0).length;
// console.log(`total available seats ${available}`);


let seats=[1,0,0,1,1,0,0,0];
let available =seats.filter(seats=>seats==0).length;
console.log(`total available  seats ${available}`)