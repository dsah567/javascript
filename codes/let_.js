var a=10
if (a){
    let a= a + 10//ReferenceError: Cannot access 'a' before initialization
}
console.log(a);