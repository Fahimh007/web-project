//let arr = [1,5,6,8,2];
// console.log(arr);

//array constructor
// let brr = new Array("fahim", 1, true, 20, 30, 40);
// brr.push("hasan");//add element at right most side
// brr.pop();//remove element at right most side
// brr.shift();//remove element at left most side
// brr.unshift("fahim");//add element at left most side

// console.log(brr.slice(2,4));//print a particular part of an array

// console.log(typeof(brr));
// brr.splice(1,2,"hasan");//remove & add item in remove positon
// console.log(brr);

//........map...............//

//let arr = [1,2,3,4,2];
// let ansArray = arr.map((number) => { return number*number; })

// console.log(ansArray);

// let arr = [1,2,3,4,2];
// arr.map((number,index)=>{
//     console.log(number);//print number
//     console.log(index);//print index
// })


//................filter..............//

//try to print even array
// let arr = [1,2,3,4,5,6,7,8];
// let evenArray = arr.filter((number)=>{
//     if(number%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(evenArray);

// print only string of an array
// let arr = [1,2,"fahim", 'hasan', null];
// let ansArray = arr.filter((value)=>{
//     if(typeof(value)==="string"){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ansArray);

//.............reduce...........//
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let ans = arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(ans);

//..........sort...........//
//  let arr = [1,2,3,4,2];
//  arr.sort();
//  console.log(arr);
//  arr.reverse();//reverse the array
//  console.log(arr);

//finding indexof any element
// let arr = [1,2,3,4,2];
// console.log(arr.indexOf(3));

//..........forEach loop...........//
// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((value,index)=>{
//     console.log("Number: ",value, "Index: ",index);
// });

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let length = arr.length;
// for(let index=0; index<length; index++){
//     console.log(arr[index]);
// }

//..........forOf.............//
// let arr = [1,2,4,5,6];
// for(let value of arr){
//     console.log(value);
// }

//..........function..........//
let arr = [1,2,3,4,5,6,7,8,9,10];

function getSum(arr){
    let length = arr.length;
    let sum = 0;
    for(let index=0; index<length; index++){
        sum = sum + arr[index];
    }
    return sum;
}
let ans = getSum(arr);
console.log(ans);
















