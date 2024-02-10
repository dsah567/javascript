# date

JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch)

|Component|Local|     |UTC|   |
|---------|-----|-----|---|---|
||Get	|Set	|Get	|Set
|Year	|getFullYear()	|setFullYear()	|getUTCFullYear()	|setUTCFullYear()
|Month	|getMonth()	|setMonth()	|getUTCMonth()	|setUTCMonth()
|Date (of month)	|getDate()	|setDate()	|getUTCDate()	|setUTCDate()
|Hours	|getHours()	|setHours()	|getUTCHours()	|setUTCHours()
|Minutes	|getMinutes()	|setMinutes()	|getUTCMinutes()	|setUTCMinutes()
|Seconds	|getSeconds()	|setSeconds()	|getUTCSeconds()	|setUTCSeconds()
|Milliseconds	|getMilliseconds()	|setMilliseconds()	|getUTCMilliseconds()	|setUTCMilliseconds()
|Day (of week)	|getDay()	|N/A	|getUTCDay()	|N/A

## Date() constructor
The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.

```js
const date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

const event = new Date(1993, 6, 28, 14, 39, 7);

console.log(event.toString());
// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toDateString());
// Expected output: "Wed Jul 28 1993"
```


## Static methods
## Date.now()
Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.

## Date.parse()
Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.

## Date.UTC()
Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.

## Instance properties
These properties are defined on Date.prototype and shared by all Date instances.

## Date.prototype.constructor
The constructor function that created the instance object. For Date instances, the initial value is the Date constructor.

## Instance methods
## Date.prototype.getDate()
Returns the day of the month (1 – 31) for the specified date according to local time.

## Date.prototype.getDay()
Returns the day of the week (0 – 6) for the specified date according to local time.

## Date.prototype.getFullYear()
Returns the year (4 digits for 4-digit years) of the specified date according to local time.

## ## Date.prototype.getHours()
Returns the hour (0 – 23) in the specified date according to local time.

## ## Date.prototype.getMilliseconds()
Returns the milliseconds (0 – 999) in the specified date according to local time.

## ## Date.prototype.getMinutes()
Returns the minutes (0 – 59) in the specified date according to local time.

## ## Date.prototype.getMonth()
Returns the month (0 – 11) in the specified date according to local time.

## ## Date.prototype.getSeconds()
Returns the seconds (0 – 59) in the specified date according to local time.

## ## Date.prototype.getTime()
Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)

## ## Date.prototype.getTimezoneOffset()
Returns the time-zone offset in minutes for the current locale.

## ## Date.prototype.getUTCDate()
Returns the day (date) of the month (1 – 31) in the specified date according to universal time.

## ## Date.prototype.getUTCDay()
Returns the day of the week (0 – 6) in the specified date according to universal time.

## ## Date.prototype.getUTCFullYear()
Returns the year (4 digits for 4-digit years) in the specified date according to universal time.

## Date.prototype.getUTCHours()
Returns the hours (0 – 23) in the specified date according to universal time.

## Date.prototype.getUTCMilliseconds()
Returns the milliseconds (0 – 999) in the specified date according to universal time.

## Date.prototype.getUTCMinutes()
Returns the minutes (0 – 59) in the specified date according to universal time.

## Date.prototype.getUTCMonth()
Returns the month (0 – 11) in the specified date according to universal time.

## Date.prototype.getUTCSeconds()
Returns the seconds (0 – 59) in the specified date according to universal time.

## Date.prototype.getYear() Deprecated
Returns the year (usually 2–3 digits) in the specified date according to local time. Use getFullYear() instead.

## Date.prototype.setDate()
Sets the day of the month for a specified date according to local time.

## Date.prototype.setFullYear()
Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

## Date.prototype.setHours()
Sets the hours for a specified date according to local time.

## Date.prototype.setMilliseconds()
Sets the milliseconds for a specified date according to local time.

## Date.prototype.setMinutes()
Sets the minutes for a specified date according to local time.

## Date.prototype.setMonth()
Sets the month for a specified date according to local time.

## Date.prototype.setSeconds()
Sets the seconds for a specified date according to local time.

## Date.prototype.setTime()
Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.

## Date.prototype.setUTCDate()
Sets the day of the month for a specified date according to universal time.

## Date.prototype.setUTCFullYear()
Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.

## Date.prototype.setUTCHours()
Sets the hour for a specified date according to universal time.

## Date.prototype.setUTCMilliseconds()
Sets the milliseconds for a specified date according to universal time.

## Date.prototype.setUTCMinutes()
Sets the minutes for a specified date according to universal time.

## Date.prototype.setUTCMonth()
Sets the month for a specified date according to universal time.

## Date.prototype.setUTCSeconds()
Sets the seconds for a specified date according to universal time.

## Date.prototype.setYear() Deprecated
Sets the year (usually 2–3 digits) for a specified date according to local time. Use setFullYear() instead.

## Date.prototype.toDateString()
Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018'.

## Date.prototype.toISOString()
Converts a date to a string following the ISO 8601 Extended Format.

## Date.prototype.toJSON()
Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().

## Date.prototype.toLocaleDateString()
Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

## Date.prototype.toLocaleString()
Returns a string with a locality-sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method.

## Date.prototype.toLocaleTimeString()
Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.

## Date.prototype.toString()
Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.

## Date.prototype.toTimeString()
Returns the "time" portion of the Date as a human-readable string.

## Date.prototype.toUTCString()
Converts a date to a string using the UTC timezone.

## Date.prototype.valueOf()
Returns the primitive value of a Date object. Overrides the Object.prototype.valueOf() method.

## Date.prototype[@@toPrimitive]()
Converts this Date object to a primitive value