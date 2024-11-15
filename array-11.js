// You are given an array of student grades. Write a function that calculates the average grade.
function calculatesaverage(grade){
if(grade.length === 0) return 0;
 let total= grade.reduce((sum,grade) => sum + grade,0 );
 return total / grade.length;
}

let grades=[45, 47, 50, 62, 79, 97];
let averagestudents=calculatesaverage(grades);
console.log(`average grade to : ${averagestudents.toFixed(2)}`)
// function calculateAverageGrade(grades) {
//     if (grades.length === 0) return 0; // Avoid division by zero
//     const total = grades.reduce((sum, grade) => sum + grade, 0);
//     return total / grades.length;
// }

// // Example usage:
// const studentGrades = [85, 90, 78, 92, 88];
// const averageGrade = calculateAverageGrade(studentGrades);
// console.log(`Average grade: ${averageGrade.toFixed(2)}`);