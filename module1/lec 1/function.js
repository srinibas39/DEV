function fun(){
    console.log("fun says HI");
}
fun()
//In JS function acts like a variable
let sayhi;
sayhi=function(){
    console.log("say hi");
}
sayhi()
console.log(sayhi);
//callback and high order funsction
function tobepassed(){
    console.log("this function needs to be passed");
}
function highorderfunction(cb){
        cb();
}
highorderfunction(tobepassed)
function getfirstname(fullname){
    fullname=fullname.split(" ");
    return fullname[0];
}
function getlastname(fullanme){
    fullname=fullanme.split(" ");
    return fullname[1];
}
function fun1(fullname,cb){
    let name=cb(fullname)
    console.log(name)
}
fun1("captain america",getfirstname);
fun1("Iron man",getlastname);
function fun2(fullname,cb1,cb2){
    let  firstname=cb1(fullname);
    let lastname=cb2(fullname);
    console.log(firstname);
    console.log(lastname);
}
fun2("srinibas khuntia",getfirstname,getlastname);