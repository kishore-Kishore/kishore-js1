calculateArea();
greetUser();
function calculateArea() {
 const radius = 5;
//  let area=10;
 var area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser(name) {
    var userName = "John";
 console.log(userName);

}

let count = 1;
while (count > 100) {
 console.log("Counting down: " + count);
 count = count + 1;
}

// let temperature = 30;
// if (temperature == 20) {
//  console.log("It's cold outside");
// } else {
//  console.log("It's warm outside");
// }




checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num <0)
    console.log("Negative");
  else if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}

let temperature = 30;
if (temperature ==20) {
 console.log("It's cold outside.");
}
 else {
 console.log("It's warm outside.");
}