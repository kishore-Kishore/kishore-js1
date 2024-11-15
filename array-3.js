// Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers assigned to different regions, find the region with the highest number of soldiers.

let soldiers=[120, 300, 250, 180, 150];
 let  maxsoldiers = Math.max(...soldiers);
let a=soldiers.indexOf(maxsoldiers);
 console.log(`the regions with the number of ${maxsoldiers} soldiers,at index${a}`);
 

//  let numbers=[1,2,3,4,73,5,6,7,8,9,10];
// for(i=0;i<numbers.length;i++){
//     let num = numbers[i];
// isPrime=true;
//     if(num<=1){
//         isPrime =false;
//     }
//     else{
//         for(j=2;j<=Math.sqrt(num);j++){
//             if(num%j===0){
//                 isPrime=false;
//             }
//         }
//     }
//     if(isPrime){
//         console.log(num)
//     }
// }