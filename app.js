// lab.txt
// 100%
// JavaScript Day 7 Assignment

// Question 1: 
// Create a JavaScript object named book with the following properties:
// - title
// - author
// - pages
// - price
// - isAvailable
// Then:
// 1. Display all book information.
// 2. Increase the price by 15%.
// 3. Add a new property called category.
// 4. Delete the isAvailable property.
// 5. Display the updated object.
let book ={
    title: "Harry  Potter ",
    author: "J. K. Rowling",
    pages:300,
    price:90,
    isAvailable:true
};
console.log("book info");
console.log({...book});
book.price= book.price+(book.price*0.15);
book.category="magical lor";
delete book.isAvailable;
console.log("updated info");
console.log(book);








// Question 2: 
// Write a JavaScript program that:
// 1. Uses prompt() to ask the user to enter a password.
// 2. Display:
//    - Password length.
//    - Password in uppercase.
//    - Password in lowercase.
//    - Whether the password contains "@".
// 3. Display an appropriate message if the password is less than 8 characters.
let password = prompt("enter your password:");
console.log("password details");
console.log("length:"+password.length);
console.log("upper case:"+password.toUpperCase());
console.log("lowercase:"+password.toLowerCase());
console.log("contains '@' :"+password.includes("@"));

if (password.length<8) {
    console.log(" warning password is short it must be atleast 8 characters");

    }
    else{
        console.log("password accepted");
        
    }






// Question 3: 
// Write a JavaScript program that:
// 1. Uses prompt() to ask the user for two numbers.
// 2. Convert both values to numbers.
// 3. Display:
//    - The larger number.
//    - The smaller number.
//    - The result of raising the first number to the power of the second number.
// 4. Use the Math object whenever possible.


let num1 = Number(prompt("enter the first number:"));
let num2 = Number(prompt("enter the second number:"));
let larger = Math.max(num1,num2);
let smaller=Math.min(num1,num2);
let powerResult=Math.pow(num1,num2);

console.log("/*/*/*/*number results****");
console.log("larger number is:"+larger);
console.log("smaller number is:"+smaller);
console.log(num1+"raised to the power of "+num2+"="+powerResult);





// Question 4: 
// Create an array named movies containing at least six movie objects.

// Each movie should have:
// - title
// - genre
// - rating
// - isWatched
let movies =[
    {title:"Inception",genere:"scifi",rating:8.8,isWatched:true},
     {title:"Titanic",genere:"Romance",rating:7.8,isWatched:false},
      {title:"The Dark Knight",genere:"Action",rating:10,isWatched:true},
       {title:"Interstaller",genere:"scifi",rating:6,isWatched:false},
        {title:"elragol el3enab",genere:"comedy sa5er",rating:10,isWatched:true},
         {title:"The Notebook",genere:"romance",rating:5,isWatched:false}
];

// Then:
// 1. Display all movies.
console.log("All movies");
console.log(movies);


// 2. Use filter() to display only the watched movies.
let watchedMovies = movies.filter(function(movies){
    return movies.isWatched===true;
});
console.log("watched movies");
console.log(watchedMovies);


// 3. Use filter() to display movies with a rating of 8 or higher.
let highRatingMovies=movies.filter(function(movie){
    return movie.rating>=8;
});
console.log("movies Rated 8 or higher");
console.log(highRatingMovies);

// 4. Display the total number of watched movies.
console.log("total watched movies"+ watchedMovies.length);

// 5. Display all movie titles using a loop.
console.log("Allmovies titles");
for (let z = 0; z< movies.length; z++) {
console.log(movies[z].title);
    
}


