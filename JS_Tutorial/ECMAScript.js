// const sum=(a,b,...num)=>{
//     return num.reduce((accu,currVal)=>
//         (accu=accu+currVal),0)
// }
// console.log(sum(1,2,3,4,5,12,45,66))

// const obj1={a:10,b:20,c:30}
// const obj2={c:40,d:50}
// const newObj={...obj1,...obj2}
// console.log(newObj);

// const nestedArray=[1,2,[3,[4]],5,[6,7,8]]
// const flattened=nestedArray.flat(2)
// console.log(flattened);

// const arr=["my name","khushi jagadish","Chaudhari"]
// const newArr=arr.flatMap(curV=>curV.split(" "));
// console.log(newArr);

// const obj1={a:10,b:20,c:30}
// const entries=Object.entries(obj1)
// console.log(entries)
// const newObj=Object.fromEntries(entries)
// console.log(newObj)

// const mySymbol=Symbol("khushi")
// // console.log(typeof mySymbol);
// console.log(mySymbol.description)

// const maxNumber=Number.MAX_SAFE_INTEGER
// console.log(maxNumber);

// let favNum=0
// userfavNum=favNum ?? 10
// console.log(userfavNum);

// const person={
//     name:'khushi',
//     address:{
//         city:'pune',
//         coordinates:{
//             latitude:30.233,
//             longitude:45.34
//         }
//     }
// }
// const lati=person.address?.coordinates?.latitude ?? "not present"
// console.log(lati);
const arr=[1,2,1,3,8,6,7,9]
console.log(arr.findLast((e)=>e<7))
console.log(arr.findLastIndex((e)=>e))
