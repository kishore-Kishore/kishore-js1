// Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude after each interval.

let altitude =1000;
let intervals=10;
let climb=altitude/intervals;

for(i=1;i<=intervals;i++){
    let a=climb*i;
   console.log(`altitude after intervals${i}:${a}ft`);
}
console.log("the airoplane reached the target altitude of 1000 ft");



// const targetAltitude = 1000; // Target altitude in feet
// const intervals = 10; // Number of intervals
// const climbRate = targetAltitude / intervals; // Altitude gained per interval

// for ( i = 1; i <= intervals; i++) {
//     const currentAltitude = climbRate * i; // Calculate current altitude
//     console.log(`Altitude after interval ${i}: ${currentAltitude} ft`);
// }

// console.log("The airplane has reached the target altitude of 1000 ft.");
