//Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.

function EvenNumbers(n){
    let i = 1;
    while(i<=n){
        if(i%2==0){
            console.log(i);
        }
        i++;
    }
    
}
EvenNumbers(20);