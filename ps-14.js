// A robot can move in 4 directions: North, South, East, and West. Use a switch statement to make the robot move in the direction entered by the user and print the robot's new position after each movement.

let position={x: 0 , y : 0};

let direction=("east,west,north,south");

switch(direction){
  case "east":
    position.x+=1;
    break;

case "west":
    position.x-=1;
    break;

case "north":
    position.y+=1;
break;

case "south":
    position.y-=1;
break;

default:
    console.log("invalid directionl.please enter new direction");
}

console.log(`Robot s new position (${position.x},${position.y})`)



