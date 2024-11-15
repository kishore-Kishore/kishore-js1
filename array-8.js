// Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature in a specific region of a forest, identify which regions have temperatures above 80 degrees.

let temperatures=[75, 80, 72, 85, 90];
let eighty=[0];
temperatures.forEach((temp,index) =>{
if(temp>80){
    eighty.push(`region${index}: ${temp} °F`)
}
});
if(eighty.length>0){
    console.log(eighty.join("\n"));
}
else{
    console.log("no regions have tempreature above 80 degrees");
}