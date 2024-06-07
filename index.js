// IF STATEMENTS = if a condition is true, execute some code
//                  if not, do something else.

// conditions looks well with boolean variables.
//With a Boolean variable if you want to check the value with an if statement you can just place the boolean variable within the condition  itself. 


//ELSE IF STATEMENTS 
// if there is any other conditions you can add an else if 
// to check if two values are equal is to use the 2 equal sign(==)

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = "You are to old to enter this site";
    }
    else if(age == 0){
        resultElement.textContent = "You can't enter. You were just born";
    }
    else if(age >= 18){
        resultElement.textContent = "You are old enough to enter this site.";
    }
    else if(age < 0){
        resultElement.textContent = "Your age can't be below 0";
    }
    else{
        resultElement.textContent = "You must be 18+ to enter this site";
    }

}






// You can also create nested if statements.

//let age = 18;
// let hasLicense = false;

// if(age >= 16){
//     console.log(`You are old enough to drive`);

//     if(hasLicense){
//         console.log(`You have your license!`);
//     }
//     else{
//         console.log(`You do not have your license yet!`);
//     }
// }
// else{
//     console.log(`You must be 16+ to have a license`);
// }


//conditions looks well with boolean variables.
//With a Boolean variable if you want to check the value with an if statement you can just place the boolean variable within the condition  itself. 

// let isStudent = false;

// if(isStudent){
//     console.log(`You are a student!`);
// }
// else{
//     console.log(`You are not a student!`);
// }

// let time = 14;

// if(time < 12){
//     console.log(`Good Morning!`);
// }
// else{
//     console.log(`Good afternoon`);
// }





