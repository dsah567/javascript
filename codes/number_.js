let a = '20px'
console.log(Number(a));//NaN

let b = '63'
console.log(Number(b));//63

let c = '63n'
console.log(Number(c));//63

let d = true
console.log(Number(d));//1

let e
let f =null
console.log(Number(e) , Number(f));//NaN 0