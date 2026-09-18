// function processUser(name,callback){
//     console.log("received input:"+name)
//     callback(name)
// }
// function greetUser(name){
//     console.log(`hello ${name}!`)
// }
// processUser("khushi",greetUser)

// const mathoperation=(a,b,op)=>{
//     return op(a,b)
// }
// const add=(a,b)=>{
//     return a+b;
// }
// const sub=(a,b)=>{
//     return a-b;
// }
// const mul=(a,b)=>{
//     return a*b;
// }

// console.log(mathoperation(10,20,sub))

const getStudentData = () => {
    setTimeout(() => {
        console.log("hi my name is khushi");
        setTimeout(() => {
            console.log("I m final yr btech student");
            setTimeout(() => {
                console.log("From RCPIT in shirpur");
                setTimeout(() => {
                    console.log("with CGPA of 8.39");
                    setTimeout(() => {
                        console.log("I m a full stack devfeloper");
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}
getStudentData();