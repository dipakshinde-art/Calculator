//  function to accept input
const add = (numbers) => {

    if (numbers == '') return 0


    let delimiter = ',';

    if (numbers.startsWith('//')) {
        let delimiterLine = numbers.split('\n')[0];
        delimiter = delimiterLine.substring(2);
        numbers = numbers.substring(delimiterLine.length + 1);
    }

    let numberList = numbers.split(new RegExp(`[${delimiter}\n]`));

    let negativeNumbers = [];
    let sum = 0;

    for (let number of numberList) {
        if (number.startsWith('-')) {
            negativeNumbers.push(number);
        } else {
            sum += parseInt(number, 10);
        }
    }
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(', ')}`
    );
  }

    return sum;
}

// multiple input 
console.log(add(""));          // Output: 0
console.log(add("1"));         // Output: 1
console.log(add("1,5"));       // Output: 6
console.log(add("1\n2,3"));    // Output: 6
console.log(add('//;\n1;2')); // Output: 3

try {
   
     console.log(add("1,2,-4"));  
} catch (e) {
    console.log(e.message);
}