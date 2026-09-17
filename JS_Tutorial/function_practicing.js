// const students = [
//     { name: "Rahul", marks: 85, city: "Pune" },
//     { name: "Sneha", marks: 72, city: "Mumbai" },
//     { name: "Amit", marks: 45, city: "Pune" },
//     { name: "Priya", marks: 91, city: "Nashik" },
//     { name: "Rohan", marks: 62, city: "Mumbai" }
// ];

// const mapping = students.forEach((std) => {
//     console.log("Mr/mrs. " + std.name)
// });
// const getInfo = students.map(std => `${std.name} - ${std.marks}`)
// console.log(getInfo)

// const getCity =students.map(std => std.city)
// console.log(getCity)

// const getPassedStd = students
//     .filter(std => std.marks > 80)
//     .map(std => std.name)
// console.log(getPassedStd)

// const doubleMrks=students.map(std =>({
//     ...std,
//     marks:std.marks*2
// })).reduce((totalMarks,students)=>{
//     return totalMarks=totalMarks+students.marks;
// },0)
//     .filter(std=>std.marks>140)
//     .map(std=>std.name);
// console.log("Total calculated marks are: "+doubleMrks)
// doubleMrks.forEach(name=>console.log("passed:"+name))

// console.log(date.getDay())
// date.setDate(20)
// console.log(date)
// const time=date.getTime()
// console.log(time)//gives millisecond since 1st jan 1970
// const hours=date.getHours()
// console.log(hours);
// const localString=date.toLocaleString();
// console.log(localString);

// const date = new Date("2027-01-02");
// const addDaysToDate = (date, ed) => {
//     // console.log(date)
//     // console.log(date.getDate())
//     //console.log(date.setDate(date.getDate() + ed))
//     //console.log(new Date(1799280000000))
//     let updatedDate=date.setDate(date.getDate() + ed)
//     updatedDate=new Date(updatedDate)
//     return updatedDate;
// }
// const newDate=addDaysToDate(date,10)
// console.log(newDate)
// const getDayDifference = (date1, date2) => {
//     const difference = date2 - date1;
//     const days = difference / (1000 * 60 * 60 * 24);
//     return days;
// }
// const date1 = new Date("2027-12-13");
// const date2 = new Date("2028-01-02");
// console.log(getDayDifference(date1, date2));

// const delayFunc=()=>{
//     console.log("this is the setTImeOut Function");
// }
// setTimeout(delayFunc,3000)

const delayFunc=()=>{
    console.log("this is the Repeted Function");
}
const repeted=setInterval(delayFunc,3000)

setTimeout(()=>{
    clearInterval(repeted)
},10000)