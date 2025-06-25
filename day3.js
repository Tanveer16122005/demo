// here create the variable with the help of var
// var a= 10;
// var a=20; // var is redeclared and reassign value
// console.log(a)

//here we create variable with let
// let a=10;
// a=30;  // by this we can redeclare
// console.log(a)
 
//here we create variable with const
// const a=10;
// console.log(a) //can't be redeclare and reassign

// function abc(a,b){
//     return a+b
// }

// let xyz = abc(2,4)
// console.log(xyz)

// const xyz = abc(8,4)
// console.log(xyz)   //hoisting cant be done//

// const abc= function(a,b){
// return a+b
// }
// const xyz = abc(8,4)
// console.log(xyz)

// const xyz = abc(10,20)
// console.log(xyz) // hoisting cant be done//

// const abc = (a,b) =>{
//     return a+b
// }
// const xyz = abc(10,20)
// console.log(xyz)

// hoisting inside variable//

// console.log(a) undefined hoisting cANT be done //
// var a= 10;
// console.log(a)

// console.log(a)
// let a=10; // not done hoisting same case with as const//

//functional scope//
// var a = 10;

// function abc(){
//     var a = 20;
//     console.log(a)
// }
// console.log(a)

// abc()

// checking block scope//
// var a = 10;
// if(a==10){
//     var b = 20;
//     console.log(b)
// }
// console.log(b)


// function abc(){
//     let a = 10;
//     console.log(a)
// }
// abc()
// console.log(a)

// let a=10;
// if(a==20){
//     let b = 20;             // it means let have block and functional scope//
//     console.log(b)
// }
// console.log(b)

function abc(){
    const a = 10;
    console.log(a)
}
console.log(a)

// const a = 30;
// if(a==30){
//     const b= 40;
//     console.log(b)
// }
// console.log(b)