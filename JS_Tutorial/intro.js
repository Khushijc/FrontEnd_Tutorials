// var age=1;
// (age>=18)?console.log("eligible:)"):console.log("underage:(")
// var age = 31;
// var citizen = false;
// var register = false;

// if (age >= 18) {
//     if (citizen) {
//         if (register) {
//             console.log("eligible for vote");
//         }
//         else {
//             console.log("not eligible for vote due to registeration status");
//         }
//     }
//     else {
//         console.log("not eligible for vote due to citizenship");
//     }
// }
// else {
//     console.log("not eligible due to age");
// }

// var l=10;
// var r=1;
// var b=2;
// var shape="square";
// switch (shape) {
//     case "circle":
//         console.log(2*3.14*r);
//         break;
//     case "square":
//         console.log(l*l);
//         break;
//     case "rectangle":
//         console.log(2*l*b);
//         break;
//     default:
//         console.log("Invalid input")
//         break;
// }
// var num=7;
// var isprime=true;
// for(var i=2;i<num;i++){
//     if(num%i==0){
//         isprime=false;
//         break;
//     }
// }
// if(isprime){
//     console.log("number is prime")
// }
// else {
//     console.log("number is not prime")
// }

// var year=2023;
// isLeap=false;
// if(year%4==0 && year%100!=0 ||year%400==0){
//     console.log("is the leap year")
// }
// else{
//     console.log("not a leap year")
// }

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,20));
// console.log(sum(1,3));
// function hellow(name){
//     console.log("hello "+ name +", welcome to my website");
// }
// hellow("khushi");

// let FN="khushi"
// let LN="chaudhari"
// let result=`${FN} ${LN}`
// console.log(result)

// let num=5
// console.log(`5 * 5 = ${5*num}`)

// let sum =(a,b)=>{
//     return a+b
// };
// console.log(sum(10,20))

// 

// let isReverse=(name)=>{
//     let rev="";
//     for(let char=name.length-1;char>=0;char--){
//         rev=rev+name[char];
//     }
//     return rev;
// }
// console.log(isReverse("khushi"));
 
// let f=["apple","banana","grapes","jamun"]
// f.forEach((cv,index,arr)=>{
//     console.log(`${cv} ${index} `)
// })

// let f=["apple","banana","grapes","jamun"]
// f.map((cv,index,arr)=>{
//     console.log(`${cv} ${index} `)
// })

// let arr=[1,2,3,4,5,3,6,7,8,9,10]
// let result=arr.lastIndexOf(3,9)
// console.log(result);

// let month=["jan","feb","mar","apr","may"]
// let r=month.push("dec")
// console.log(month);
// let updateIndex=month.indexOf("mar")
// month.splice(updateIndex,3,"march")
// console.log(month);

// let value=3
// let arr=[1,2,3,4,3,5,3,6,7,3]
// let r=arr.filter((currEle)=>{
//     return (currEle!=value)

// })
// console.log(r)

// const product=[
//     {name:"laptop",price:1200},
//     {name:"TV",price:1000},
//     {name:"tab",price:300},
//     {name:"mobile",price:200},
// ]

// let filterProduct=product.filter((currEle)=>{
//     return currEle.price<=500
// })
// console.log(filterProduct);
//const num=[1,2,3,4,5,6,4,5,8,9]
// const r=num.filter((currEle,index,arr)=>{
//     return arr.indexOf(currEle)==index;
// })
// console.log(r);
//console.log(new Set(num))

// num=[2,4,1,5,6,2,7,4,3,9,8,10]
// num.sort((a,b)=>{
//     if(a>b) return -1;
//     if(b>a) return 1;
// })
// console.log(num);
// num=[1,2,3,4,5,6]
// const r=num.map((currEle)=>{
//     if (currEle%2==0){
//         return currEle*currEle;
//     }
// }).filter((currEle)=>currEle!=undefined)
// console.log(r)

// str="khushi chaudhari"
// console.log(str.indexOf("c"))

// str="khushi chuadhari"
// strArr=Array.from(str)
// let r=strArr.map((currEle,index)=>`${currEle} - ${index}`)
// console.log(r)

// for(let char="97";char<=122;char++){
//     console.log(String.fromCharCode(char))
// }

// const vowel=(str)=>{
//     const v='aeiou'
//     let c=0
//     for (let char of str){
//         // console.log(char)
//         if(v.includes(char))
//             c++;
//     }
//     return c;
// }
// console.log(vowel("hellow a e i o u o w"))

// const pangram = (str) => {

//     let inputArr = str.toLowerCase().split("");

//     const value = inputArr.filter((currEle) => {
//         return currEle.charCodeAt() >= "a".charCodeAt() &&
//                currEle.charCodeAt() <= "z".charCodeAt();
//     });

//     return new Set(value).size === 26;
// };

// console.log(pangram("the quick brown fox jumps over the lazy dog"));

