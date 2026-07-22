// Conditional Statements
// Sntax
// if (condition) {
//      code to execute if condition is true 
// }

// let age = 1;

// if (age >= 18) {
//     console.log("User is eligible for voting")
// }

// if (age < 18) {
//     console.log("User is not eligible for voting")
// }


// if (age >= 25) {
//     console.log("User can be nominated for president");
// }


// else - if 

// let marks = 86;
// if(marks >= 90){
//     console.log("Grade A");
// }
// else if(marks >= 80){
//     console.log("Grade B");
// }
// else if(marks >= 70){
//     console.log("Grade C");
// }
// else if(marks >= 60){
//     console.log("Grade D");
// }
// else if(marks >= 33){
//     console.log("Grade E");
// }
// else{
//     console.log("Fail");
// }


// nested if
// let isHandicaped = false;
// let hasLicense = false;
// let age = 23;

// License wala
// if (age >= 18) {

//     if(hasLicense){

//         if(isHandicaped){
//             console.log("You need rest and get well soon, after recovery you would be able to drive.");
//         }
//         else{
//             console.log("You can drive smoothly.");
//         }

//     }
//     else{
//         console.log("You need to get a license to drive.");
//     }

// }
// else{
//     console.log("You can not drive until you become 18.")
// }

// Shadi wala
// if (age >= 18) {

//     if(age >= 21){
//         console.log("You can marry.");
//     }
//     else{
//         console.log("You can be in relationship but cannot marry. to get married you must be 21 atleast");
//     }
// }
// else{
//     console.log("You can not be in relationship.")
// }


// AND && Operators in conditional statements
// let age = 25;
// let hasLicense = false;

// if(age >= 18 && hasLicense){
//     console.log("You can drive");
// }
// else{
//     console.log("You can not drive because your age is less than 18");
// }


// OR || Operator in conditional statement
// let isTeacher = false;
// let isPeon = false;

// if(isTeacher || isPeon){
//     console.log("You can access in staff room.");

// }
// else{
//     console.log("You cannot access in staff room.");
// }


// NOT ! Operator in COnditional statement
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please Login first");
}
else {
    console.log("Welcome !! You are logged in our app.");
}



console.log("This is the end.");
