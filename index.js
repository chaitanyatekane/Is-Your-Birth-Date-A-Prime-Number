const readlineSync= require("readline-sync");

const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let testFlag = false;

const userName = readlineSync.question("Welcome, Can You Please Enter Your Name?\n");
console.log(`Hello ${userName}, Now I will tell you if your birth date is a prime number or not!!\n`);

takeDate();

function takeDate(){
    const inputDate = readlineSync.question("Please enter your birth-date in the format 'DD/MM'\n");

    const dateArray = inputDate.split('/');
    const DD = dateArray[0];
    const MM = dateArray[1];

    // check if date is valid or not
    if(isNaN(MM) || isNaN(DD) || (!Number.isInteger(Number(MM))) || (!Number.isInteger(Number(DD)))){
        console.log("\nYou Entered Invalid Date");
        takeDate();
    }else if(MM<=0 || DD<=0 || MM>12 || DD>31){
        console.log("\nYou Entered Invalid Date");
        takeDate();
    }else if(DD>monthDays[MM-1]){
        console.log("\nYou Entered Invalid Date");
        takeDate();
    }else{
        isPrime(DD);
    }
}

// function for checking whether date is prime or not
function isPrime(testNo){
    testNo = Number(testNo);

    if(testNo===1){
        console.log("\nYour Birth-Date Is Neither Prime Nor Composite");
    }else if(testNo===2){
        testFlag = false;
    }else{
        for(let i=2; i<testNo; i++){
            if(testNo % i === 0){
                testFlag = true;
                break;
            }
        }
    }
}

// print final result
if(testFlag){
    console.log("\nOops, Your Birth-Date Is Not A Prime Number");
}else{
    console.log("\nAwesome, Your Birth-Date Is A Prime Number");
}