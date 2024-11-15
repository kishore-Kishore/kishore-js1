// Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format, find the earliest train to depart.

// let train_departures=[10, 15, 7, 20, 5];
// let sum=0;
// for(i=0;i<train_departures.length;i++){
//    sum+= train_departures[i];
// }

//  let earliestDeparture=Math.min();
// console.log(`the earliest train departs at :${earliestDeparture}:00 `);


let train_departures=[10,5,9,8,3];
let sum=0;
for(i=0;i<train_departures.length;i++){
    sum += train_departures[i]
}
let earliestDeparture=Math.max(...train_departures);
console.log(`the eralist${earliestDeparture}:00 `)
















    // let train_departures = [10, 15, 7, 20, 5];

    // // Initialize earliestDeparture with the first element
    // let earliestDeparture = train_departures[0];

    // // Loop through the array to find the earliest departure
    // for (let i = 1; i < train_departures.length; i++) {
    // if (train_departures[i] < earliestDeparture) {
    //     earliestDeparture = train_departures[i];
    // }
    // }

    // console.log(`The earliest train departs at:${earliestDeparture}:00 `);















    // let train_departures=[10,7,9,11,12];
    // let earliestDeparture=train_departures[0];
    // for(i=1;i<train_departures.length;i++){
    //     if(train_departures[i]<earliestDeparture){
    //         earliestDeparture=train_departures[i];
    //     }
    // }
    // console.log(`time at : ${earliestDeparture}:00 P.M `);

