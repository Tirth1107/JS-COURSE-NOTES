let a = parseInt(prompt("Enter A number : ")); // Take the value from user and convert it to integer
let b = parseInt(prompt("Enter B number : ")); // Take the value from user and convert it to integer
let c = parseInt(prompt("Enter C number : ")); // Take the value from user and convert it to integer

if(a>b){
    if(a>c){
        console.log("A");
    }
    else{
        console.log("C");
    }
}
else{
    if(b>c){
        console.log("B");
    }
    else{
        console.log("C");
    }
}