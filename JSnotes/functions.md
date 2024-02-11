# functions
The length data property of a Function instance indicates the number of parameters expected by the function.

```js
function func1() {}

function func2(a, b) {}

console.log(func1.length);
// Expected output: 0

console.log(func2.length);
// Expected output: 2
```

## Function.prototype.toString()
The toString() method of Function instances returns a string representing the source code of this function.

```js
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// Expected output: "function sum(a, b) {
//                     return a + b;
//                   }"

console.log(Math.abs.toString());
// Expected output: "function abs() { [native code] }"
```

If the toString() method is called on built-in function objects, a function created by Function.prototype.bind(), or other non-JavaScript functions, then toString() returns a native function string .