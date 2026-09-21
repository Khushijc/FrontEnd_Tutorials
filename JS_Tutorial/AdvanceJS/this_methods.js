const person={
    name:'khushi',
}
function greet(greeting,puncMark){
     console.log(`${greeting} my name is ${this.name} ${puncMark}`)
}
greet.call(person,'hello','!')
greet.apply(person,['hello','!'])
const bindMethod=greet.bind(person)
bindMethod("heyy",".")

const arr=[1,2,3,4]
const[f,s,t]=arr
console.log(f,s,t)