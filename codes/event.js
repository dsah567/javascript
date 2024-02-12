function test() {
    console.log('testing');
    alert('testing')   
}
function fn(e){
    console.log(e)
    e.target.style.backgroundColor="red";
    console.log("Hello")
}
const he = document.querySelector("button")
he.addEventListener('click',fn)