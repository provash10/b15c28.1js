// Class-28.1 JS Conditional Statement (Problems related if-else)
// =============================================================

let numbers;
numbers = 87;

if (numbers > 100 || numbers < 0){
    console.log("Invalid")
}


else if(numbers >= 80){
    console.log("The Grade is: A+");
}

else if(numbers >= 70){
    console.log("The Grade is: A");
}
else if(numbers >= 60){
    console.log("The Grade is: A-");
}
else if(numbers >= 50){
    console.log("The Grade is: B");
}
else if(numbers >= 40){
    console.log("The Grade is: C");
}
else if(numbers >= 33){
    console.log("The Grade is: D");
}


else{
    console.log("Failed")
}

// ===========================================
// Get the even or odd number; the number is = 79

let number;
number = 79;

if(number % 2 == 0){
    console.log("The number is : Even");
}

else{
    console.log("The number is : Odd");
}

// =======================================
// 1. write a js program to find maximum between two numbers.
let number_1 = 40;
let number_2 = 30;

if(number_1 > number_2){
    console.log("number 1 is Bigger than number 2");
}

else{
    console.log("number 2 is bigger.");
}

// ===========================================
// 2. write a js program to check whether a number is negative, positive or zero. 

let number_3 = -46;

if(number_3 > 0){
    console.log("Positive");
}
else if(number_3 < 0){
    console.log("Negative");
}

else{
    console.log("Zero");
}

// =========================================
// 3. write a js program to check whether a number is divisible by 5 and 11 or not.
let number_4 = 30;

if(number_4 % 5 && number_4 % 11 == 0 ){
    console.log("Divisible");
}

else{
    console.log("Not Divisible");
}

// =========================================
// 4. write a js program to check whether a year is leap year or not.
let years;
years = 2033;

if(years % 4 == 0){
    console.log("Leap Year");
}

else{
    console.log("Not Leap Year");
}