// A robot moves forward as long as its battery level is above 20%. Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level. Once the battery level is below 20%, Display Battery is low.



let battery=100;
let a=20;
while(battery>a){
    console.log(`robot is moving. Remaining battery ${battery}%`);
    battery-=5;
}
console.log("battery is low");