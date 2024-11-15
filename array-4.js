// Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of an Indian state over the last 5 years, calculate the average population.

let populations=[50, 60, 40, 80, 90];

let total=0;

for(i=0;i<populations.length;i++){
    total+=populations[i];
}
let a= total / populations.length;
console.log("average population"+a);