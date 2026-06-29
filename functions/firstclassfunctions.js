// First Class Fun means functions which we can use as a value. 

let a = function(){
    return 10;
} // Example 1


// Example 2 :
function b(val){ // Here the value for the function will come
    val(); // we will execute any thing that come as the argument
}

b(function(){ // We will send a function as a argument only.
    console.log("Hello World"); // in output this will print
});