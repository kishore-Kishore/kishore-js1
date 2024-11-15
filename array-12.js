// You have an array of people ages. Write a function that filters out people who are 18 years old or older.


function filterout(ages){
   return ages.filter(age => age <18);

}
let peopleage=[15, 20, 17, 16, 25];
let minor=filterout(peopleage);
console.log(`people under 18: ${minor}`)