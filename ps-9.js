//   Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:

function classifyNumber(){
  let i=125;
    if(i%3==0){
console.log("Divisible by 3");
    }
    else if(i%5==0){
     console.log("divisible by 5")
    }
    else if(i%3==0 && i%5==0){
     console.log("Divisible by both 3 and 5");   
    }
    else{
        console.log("Not divisible by 3 or 5");
    }
}
classifyNumber();