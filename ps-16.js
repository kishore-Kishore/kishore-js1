//  Based on the flight’s destination, direct the airplane to a specific runway. Use a switch statement to assign the runway depending on the destination entered by the user.

let destination= ("india" ,"tokyo","japhan","us","uk","russia");
let runway;

switch(destination){
    case "india":
        runway="runway1";
    break;

    case "tokyo":
     runway="runway2";
     break;

     case "japhan":
        runway="runway3";
    break;

    case "us":
    runway="runway4";
    break;

    case "uk":
        runway="runway5";
    break;

    case "russia":
        runway="runway6";
    break;

    default:
        runway="no design to run away"
}
console.log(`to assign the runaway for your flight ${destination}is:${runway}`);
