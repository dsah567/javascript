# Number
Numbers are returned as-is.
- undefined turns into NaN.
- null turns into 0.
- true turns into 1; false turns into 0
- Symbols throw a TypeError.

## Number() constructor
The Number() constructor creates Number objects. When called as a function, it returns primitive values of type Number.

```javascript
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
```

- The Number.EPSILON static data property represents the difference between 1 and the smallest floating point number greater than 1.
- The Number.MAX_SAFE_INTEGER static data property represents the maximum safe integer in JavaScript (253 – 1).  9007199254740991
- The Number.MAX_VALUE static data property represents the maximum numeric value representable in JavaScript.   
- The Number.MIN_SAFE_INTEGER static data property represents the minimum safe integer in JavaScript, or -(253 - 1).
- The Number.MIN_VALUE static data property represents the smallest positive numeric value representable in JavaScript.
- The Number.NaN static data property represents Not-A-Number, which is equivalent to NaN. 

## Number.isFinite()
The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.
### Difference between Number.isFinite() and global isFinite()
In comparison to the global isFinite() function, this method doesn't first convert the parameter to a number. This means only values of the type number and are finite return true, and non-numbers always return false.
```js
isFinite("0"); // true; coerced to number 0
Number.isFinite("0"); // false
isFinite(null); // true; coerced to number 0
Number.isFinite(null); // false
```

## Number.isInteger()
The Number.isInteger() static method determines whether the passed value is an integer

## Number.isNaN()
The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. It is a more robust version of the original, global isNaN() function.

### Difference between Number.isNaN() and global isNaN()
Number.isNaN() doesn't attempt to convert the parameter to a number, so non-numbers always return false. The following are all false:
```js 
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

```js
isNaN("NaN"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("blabla"); // true
isNaN(true); // false, this is coerced to 1
isNaN(null); // false, this is coerced to 0
isNaN("37"); // false, this is coerced to 37
isNaN("37.37"); // false, this is coerced to 37.37
isNaN(""); // false, this is coerced to 0
isNaN(" "); // false, this is coerced to 0
```
## Number.isSafeInteger()
The Number.isSafeInteger() static method determines whether the provided value is a number that is a safe integer.

## Number.parseFloat()
The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
### Number.parseFloat vs. parseFloat
This method has the same functionality as the global parseFloat() function:

## Number.parseInt()
The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.

### Number.parseInt vs. parseInt
This method has the same functionality as the global parseInt() function:

## Number.prototype.toExponential()
The toExponential() method of Number values returns a string representing this number in exponential notation.

syntax
```js
toExponential()
toExponential(fractionDigits)

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456, 2));
// Expected output: "1.23e+5"

console.log(expo('123456'));
// Expected output: "1.23456e+5"

console.log(expo('oink'));
// Expected output: "NaN"
```

## Number.prototype.toFixed()
The toFixed() method of Number values formats this number using fixed-point notation.

syntax
```js
toFixed()
toFixed(digits)

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// Expected output: "123.46"

console.log(financial(0.004));
// Expected output: "0.00"

console.log(financial('1.23e+5'));
// Expected output: "123000.00"
```

## Number.prototype.toPrecision()
The toPrecision() method of Number values returns a string representing this number to the specified precision.

```js
toPrecision()
toPrecision(precision)

function precise(x) {
  return x.toPrecision(4);
}

console.log(precise(123.456));
// Expected output: "123.5"

console.log(precise(0.004));
// Expected output: "0.004000"

console.log(precise(1.23e5));
// Expected output: "1.230e+5
```

## Number.prototype.toString()
The toString() method of Number values returns a string representing this number value.

## Number.prototype.valueOf()
The valueOf() method of Number values returns the value of this number.