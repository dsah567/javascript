// Define an array of objects
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
  ];
  
  // Define a callback function to filter people older than a given age
  function filterOlderThan(person) {
    return person.age > this.threshold;
  }
  
  // Use the filter method with the second argument to set the context
  const olderThan30 = people.filter(filterOlderThan, { threshold: 30 });
  
  // Output the result
  console.log(olderThan30);
  