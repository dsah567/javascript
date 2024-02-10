# String
The String object is used to represent and manipulate a sequence of characters.

Strings are returned as-is.
- undefined turns into "undefined".
- null turns into "null".
- true turns into "true"; false turns into "false".
- Numbers are converted with the same algorithm as toString(10).
- BigInts are converted with the same algorithm as toString(10).
- Symbols throw a TypeError.
- Objects are first converted to a primitive by calling its [@@toPrimitive]() (with "string" as hint), toString(), and valueOf() methods, in that order. The resulting primitive is then converted to a string.

## String: length
The length data property of a String value contains the length of the string in UTF-16 code units.

## String.prototype[@@iterator]()
The [@@iterator]() method of String values implements the iterable protocol and allows strings to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. 
```html
const iterator = str[Symbol.iterator]();
let theChar = iterator.next();
```

## String.prototype.at()
The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset. 

## String.prototype.charAt()
The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

## String.prototype.concat()
The concat() method of String values concatenates the string arguments to this string and returns a new string.

```js
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"
```

## String.prototype.endsWith()
The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

```js
endsWith(searchString)
endsWith(searchString, endPosition)

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false
```

## String.prototype.includes()
The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

## String.prototype.indexOf()
The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

indexOf(searchString)

indexOf(searchString, position)

