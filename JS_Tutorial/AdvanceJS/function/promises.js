// const pr=new Promise((res,rej)=>{
//     setTimeout(()=>{res("HII how are you?")},2000)
// })
// .then(res=>console.log(res))
// .catch(err=>console.err(err))
// .finally(()=>console.log("I hope you are doing good:)"))

// const StudentInfo = (studentName) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isSuccessful = (Math.random) > 0.4;
//             if (isSuccessful) {
//                 resolve(`Enrollmenet is successful for ${studentName}`)
//             } else {
//                 reject(`Enrollmenet is NOT successful for ${studentName}.please try again`)
//             }
//         }, 2000)
//     })
// }

// StudentInfo("khushi").then(res => console.log(res)).catch(err => console.error(err)).finally(() => { console.log("done with execution") })

const promise1 = new Promise((res) => {
    setTimeout(() => res("first promise"), 1000)
})
const promise2 = new Promise((res,rej) => {
    setTimeout(() => rej("Second promise"), 5000)
})
const promise3 = new Promise((res) => {
    setTimeout(() => res("Third promise"), 2000)
})
Promise.allSettled([promise1, promise2, promise3])
    .then((values) => {console.log(values)})
    .catch(err => {console.error(err)})//.finally(()=>console.log("Done with .all property"))
