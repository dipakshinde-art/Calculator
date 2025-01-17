//  function to accept input
const addNumber = (numbers) => {
   console.log(numbers);
   if (numbers == '')  return 0 


   let delimiter = ',';
   // code for , the beginning of the string will contain a separate line 

   if (numbers.startsWith('//')) {
     let delimiterLine = numbers.split('\n')[0];
     delimiter = delimiterLine.substring(2);
     console.log(delimiterLine, delimiter)
     numbers = numbers.substring(delimiterLine.length + 1);
     console.log(numbers)
   }

   
}

// multiple input 
console.log(add(""));          // Output: 0
console.log(add("1"));         // Output: 1
console.log(add("1,5"));       // Output: 6
console.log(add("1\n2,3"));    // Output: 6
console.log(add('//;\n1;2')); // Output: 3