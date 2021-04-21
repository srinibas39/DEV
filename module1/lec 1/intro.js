console.log("HELLO WORLD")
//let -->Block scope
let a=10;
console.log(a);
if(true){
    //let a=20;
    a=20;
    console.log(a);
    if(true){
        let a=30;
        console.log(30);
    }
}
console.log(a);
//const--.constant and block scope
const pi=3.14;
console.log(pi);
if(true){
    const pi=5
    console.log(pi);
}
console.log(pi);
//NOn primitive
let values=[1,2,3,4,5,6,7,8,9,10];
console.log(values);
values.push("captain America");
console.log(values);
values.pop()
console.log(values)
values.unshift("Iron man")
console.log(values);
values.shift();
console.log(values);
//objects
let obj={name:"srinibas khuntia",place:"bhubneshwar",movies:["captain america","iron man"]}
console.log(obj.name);
key="place"
console.log(obj[key]);
console.log(obj.key);
let obj1={"fullname":"steve rogers",place:"queen",movies:["avengers","captain America",{bestie:"bucky",nickname:"wintersoldier",partner:"falcon",weakness:["brainwash"]}]}
console.log(obj1.movies[2].weakness[0]);
console.log(obj1.movies[2].weakness[0].substring(5));
console.log(obj1.movies[2].weakness[0].substring(0,5));