// function hosting
// {
//     sayMyName("Fahim");
//     function sayMyName(name){
//         console.log(name);
//     }
// }

//.............variable hosting..........//
// in variable hosting just variable declaration shift above.It work only for var data type
// console.log(age);
// var age = 25;

// variable hosting is't possible in let,const data type
// const age = 25;
// console.log(age);

//......class hosting...........// ......class hosting is't possible
// const object = new Human();
// class Human{
// } 

//.........return function.............//
// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }

// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);   //output:100


//...........Array of function...............//
const arr = [
    function(a,b){
        return a+b;
    }, 
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
]

let first = arr[1];
let ans = first(5,10);
console.log(ans);




