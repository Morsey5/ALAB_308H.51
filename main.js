//maxOfThree (Function Expression)

const maxOfThree = function(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  };

  const result = maxOfThree(5, 8, 3);
    console.log(result);

//isCharAVowel (Function Declaration)

function isCharAVowel(char) {
    // Convert the character to lowercase to handle both uppercase and lowercase vowels.
    char = char.toLowerCase();
    
    // Check if the character is one of the vowels.
    return 'aeiou'.includes(char);
  }

const result1 = isCharAVowel('a');
const result2 = isCharAVowel('E');

console.log(result1); // true
console.log(result2); // true

//sumArray (Function Expression)

const sumArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };

const result = sumArray([2, 4, 5]);
console.log(result);


//multiplyArray (Function Declaration)

function multiplyArray(arr) {
    if (arr.length === 0) {
      return 0; // Return 0 if the array is empty.
    }
  
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }

const result = multiplyArray([2, 4, 5]);
console.log(result);

//numArgs (Function Expression)

const numArgs = function() {
    return arguments.length;
  };
  
  const result1 = numArgs(1, 2, 3);
  const result2 = numArgs('a', 'b', 'c', 'd', 'e');
  
  console.log(result1); // 3
  console.log(result2); // 5
  
  //reverseString(Function Declaration)

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const result = reverseString('rockstar');
  console.log(result); // ratskcor
  