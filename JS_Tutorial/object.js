// const product={
//     id:1,
//     name:"laptop",
//     version:4.0
// }
// let idType="CollegeId"
// const validation={
//     [idType]:"123abc",
//     srNo:101,
//     age:21,
//     isStudent:true,
//     greet:()=>{
//         console.log(this)
//         //console.log(`Type: ${idType} have the id: ${validation[idType]} with age: ${validation.age} is valid!;)`)
//     },
// }
// validation.job="mern dev"
// validation.age=20
// console.log(validation)
//validation.greet()
// let jsonObj=JSON.stringify(validation)
// console.log(jsonObj)
// console.log(JSON.parse(jsonObj))

// const target={a:1,b:2}
// const source={b:3,c:4}
// const merged=Object.assign(target,source)
// console.log(merged);
// console.log(target)
// console.log(source)
// let student={
//     name:"bob",
//     age:20,
//     grades:{
//         maths:20,
//         science:19,
//         hindi:17,
//     }
// }
// const addSubjectGrade=(student,sub,marks)=>{
//     if(!student.grades){
//         student.grades={}
//     }
//     return student.grades[sub]=marks;
    
// }
// addSubjectGrade(student,"computer",20)
// console.log(student)


// const areObjectsEqual = (obj1, obj2) => {
//     let o1 = Object.keys(obj1);
//     let o2 = Object.keys(obj2);
//     if (o1.length !== o2.length) {
//         console.log("the value are not same");
//         return false;
//     }
//     for(let key in obj1){
//         if(obj1[key]!==obj2[key]){
//             return false
//         }
//     }
//     return true;
// };

// let obj1 = { name: "khushi", age: 20 };
// let obj2 = { name: "khushi", age: 20};
// let obj3 = { name: "bob", age: 22, country: "India" };

// console.log(areObjectsEqual(obj1, obj2)); 
// console.log(areObjectsEqual(obj1, obj3)); 

// const firstfunc=()=>{
//     console.log("fist function executing......");
//     secondfunc()
// }
// const secondfunc=()=>{
//     console.log("second function starts.....")
//     setTimeout(()=>{
//         console.log("second function ends.....");
        
//     },3000)
//     thirdfunc()
// }
// const thirdfunc=()=>{
//     console.log("third function completed.......")
// }
// firstfunc()

// function outer(){
//     let name="khushi"
//     function inner(){
//         console.log(`my name is ${name}`);
//     }
//     return inner;
// }
// var closure=outer();
// closure();

// function multiplier(fact){
//     return function(num){
//         console.log(num,fact)
//         return num*fact;
//     }
// }
// const double=multiplier(2);
// console.log(double(5));

// const number=[10,20,30]
// const [first,second,third]=number
// console.log(third)
let a=10,b=20;
// a=b-a
// b=b-a
// a=a+b
[a,b]=[b,a]
console.log(a,b);
