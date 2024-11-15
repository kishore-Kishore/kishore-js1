// Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter is scheduled to land, check if any two helicopters are scheduled to land at the same time.


const landing_times = [12, 15, 12, 18, 20];
const seenTimes = new Set(); 
let hasDuplicate = false; 


for (let i = 0; i < landing_times.length; i++) {
    if (seenTimes.has(landing_times[i])) {
        hasDuplicate = true; 
        break; 
    }
    seenTimes.add(landing_times[i]); 
}

if (hasDuplicate) {
    console.log("There are helicopters scheduled to land at the same time.");
} else {
    console.log("All helicopters have unique landing times.");
}
