
//********* // 1- using object///************************* */
function calculate(x,y) {
    return {
        sum: x+y,
        diffrence:x-y,
        reminder:x%y
};
    
}
let result=calculate(15,10);
console.log(result.sum);
console.log(result.diffrence);
console.log(result.reminder);

// // ******** 2-using array*******//
function calc(z,y){
    return[z+y,z-y,z%y];
}
let [sum,diffrence,reminder] = calc(15,10);
console.log(sum,diffrence,reminder);

// Question 2: 
// Write a JavaScript program that:
// 1. Uses prompt() to ask the user for:
//    - Name
//    - Age
// 2. Uses alert() to display:
//    Welcome [Name]!
//    You are [Age] years old.(bouns)
// 3. Uses confirm() to ask:
//    "Do you want to continue?"
// 4. Displays the result of confirm() in the console.
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

alert("Welcome " + name + "!\nYou are " + age + " years old.");

let wantsToContinue = confirm("Do you want to continue?");

console.log(wantsToContinue);

// Question 3: 
// Write a JavaScript program that:
// 1. Uses prompt() to ask the user to enter a student's grade (0–100).
// 2. Displays the corresponding grade:
//    - 90–100  -> A
//    - 80–89   -> B
//    - 70–79   -> C
//    - 60–69   -> D
//    - Below 60 -> F
// 3. If the entered grade is less than 0 or greater than 100,
//    display:
//    "Invalid Grade"
let grade = Number(prompt("Enter the student's grade (0-100):"));

if (grade < 0 || grade > 100) {
    console.log("Invalid Grade");
} else if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}


// Question 4: 
// Write a JavaScript program that:
// 1. Uses a for loop.
// 2. Prints all even numbers from 2 to 50.
// 3. Displays the numbers in the console.
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// Question 5
// Write a JavaScript program that:
// 1. Uses prompt() to ask for:
//    - Username
//    - Password
// 2. If:
//    Username = "admin"
//    Password = "1234"
//    Then:
//    - Display "Login Successful"
//    - Use a loop to print:
//      Welcome 1
//      Welcome 2
//      Welcome 3
//      Welcome 4
//      Welcome 5
// 3. Otherwise, display:
//    "Invalid Username or Password"
let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
    for (let i = 1; i <= 5; i++) {
        console.log("Welcome " + i);
    }
} else {
    console.log("Invalid Username or Password");
}






















