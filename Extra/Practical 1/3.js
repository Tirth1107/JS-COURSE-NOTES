let year = parseInt(prompt("Enter Year : "));
console.log((year%100!=0 && year%4==0?"Leap":(year%400==0?"Leap":"Not Leap")));