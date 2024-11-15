// Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum of 50 students
function calculateBuses(studentsPerRoute, busCapacity) {
 let totalBuses = 0;

    for (let students of studentsPerRoute) {
        totalBuses+= Math.ceil(students / busCapacity);
    }
          return totalBuses;
}

let  studentsPerRoute = [45, 55, 30, 60, 40];
let busCapacity = 50;
let  totalBusesRequired = calculateBuses(studentsPerRoute, busCapacity);
console.log(`Total number of buses required: ${totalBusesRequired}`);