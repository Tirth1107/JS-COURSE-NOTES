// Default Parameters

function Def(v1=0,v2=0){  // This is Default Parameters
    console.log(v1+v2) //undefined + undefined = NaN
}
Def(); // There will be 2 undefined parameters


// Rest/Spread Parameters -> rest and spread notes.md

function rest(...val){ // This is rest parameter in this multiple argument as many we want are allowed the output will be in array. Like if we give 12 numbers then all of them will be there in array form.

    console.log(val) // All the values that are taken will be shown here. No need of multiple variable to store them. It will be shown as an array.

}
rest(12,1,21,2,12,12,12,12,12,12,1,21,21,21,2,12,1,2,2,234,324,3,345,43,543,6543,543,543,5,1232132,13,12,321,321,321,321,321,312,32,4,345,43,658,768,67,563,3,534,543,4,2,2,4,234,23,42,4) // ALL OF THIS ARE PASSED TO THE FUNCTION.


// OPERATOR OF THIS "..."(Three Dots).
// This are used in both rest and spread both parameters.

// rest : when this operator is used for a function like we did before then this is will be called as rest parameters.

// Spread : When this operator is used inside arry/objects then this is known as spread parameters.