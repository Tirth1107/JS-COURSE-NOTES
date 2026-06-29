// HOF : The Function which return a function as a parameter or accept a function as a parameter.

function a(val){ // This is a higher order function as it accepts a functions as argument.
    val();
}

a(function(){
    console.log("Higher Order Functions");
})


function b(){ // Till this line its not a higher order function
    return function(){
        console.log("From this line it is a higher order functions as it is returning a function.")
    }
}