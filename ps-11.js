// Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.
// For example, if n =5 and r = 6


function printMultiplicationTable(n,r){
   
    
    for(let i=r; i>=1;i--){
        console.log(`${n}*${i}= ${n*i}` );
    }

}
printMultiplicationTable(5,6);
// let n=100;
// for(i=1;i<n;i++){
//     console.log(i);
//   if(i%99==0){
//    console.log("finished")
//   }
 
// }