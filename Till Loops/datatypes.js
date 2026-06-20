// Primitive -> sting,number,boolean,null,undefined,bigint,symbol
//Non Primitive -> array -> [], objects -> {}, function -> ()

// String -> "",'',``

let a = `Tirth`;
let b = "Tirth";
let c = 'Tirth';

//No data types like float and other just a single datatype for them called Number.

// undefined -> The value the variable gets when we declare them and we dont give any any value to them

let z; //undefined

//Big Int : How to declare : Number.MAX_SAFE_INTEGER AND AT THE END n

let x = 9007199254740991n; // This is big int
// Addition in big int :
x = x + 1432n;



// Array, Objects, Function
// This are the refrence value means you cant copy the value the copied thing will be a refrence.

let n1 = [1,2,3]; //Array Named n1.
let n2 = n1; // n1 gave refernce to n2 not value.

// Refrence means when you will do any changes to any of the array n1 or n2 then it will also do changes in the other one.

n2.pop(); //Pops the last element but not only in the n2 but also in n1.
console.log(n1);