//  function to accept input
const addNumber = (number) => {
   console.log(number);
   if (number === '')  return 0 
}

// multiple input 
console.log(add(""));          // Output: 0
console.log(add("1"));         // Output: 1
console.log(add("1,5"));       // Output: 6
console.log(add("1\n2,3")); // Output: 6
console.log(add('//;\n1;2')); // Output: 3