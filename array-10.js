// You have an array of daily expenses for a week. Write a function that calculates the total expenses for the week.

function calculatetotalexpensesS(expenses){
    return expenses.reduce((total, expense) => total + expense, 0);
}
let week=[120, 300, 350, 240, 100, 180, 290];
let total=calculatetotalexpensesS(week);
console.log(`total expence for week: ${total}`);