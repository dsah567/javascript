function greeting()
{
    console.log('Hello');
}
function greeting()
{
    console.log('Hello @');
}
greeting()

function greetPerson(name)
{
    console.log(`Hello ${name}`);
}
greetPerson("Dipu")

function greetDefault(name="Kumar")
{
    console.log(`Hello ${name}`);
}
greetDefault("Dipu")
greetDefault();

(function()
{
    console.log('Hello');
})();//while using 2 iiff ; is necessary

(function (name="Kumar")
{
    console.log(`Hello ${name}`);
})()

let namea = () => console.log(` My name is Dipu`);
namea()

let namepass = (name) => console.log(` My ${name} is Dipu`);
namepass("Dipu sah")

const sum =(a,b)=> a+b
console.log(sum(1,2))

const sub =(a,b)=> ( a-b)
console.log(sub(1,2))

const mul =(a,b)=> {
    a=a+1
    b= b+1
    return a*b
}

console.log(mul(1,2))