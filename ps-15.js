// An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.

let altitude=1000;
while(altitude>0){
   console.log(`currently altitude ${altitude}ft`);
   altitude-=10;
}
console.log("flight arrived");