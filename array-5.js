// Given the array water_levels = [30, 50, 20, 40, 60], where each element represents the current water level in a tank, find the tank with the lowest water level.

let waterlevel=[30, 50, 20, 40, 60];
let average= waterlevel[0];
for(i=1;i<=waterlevel.length;i++){
   if( waterlevel[i]< average){
      average=waterlevel[i];
   }
 
}
console.log("lowest water level",average);