// Module imports
import { CodeEditor } from "../../index";

const RecursionFour = (props) => {
  const defaultCode = `/*
    PROMPT: Write a recursive algorithm that accepts an integer representing an index value of a given number in the Fibonacci sequence, and returns the Fibonacci number at that index location. 

    FYI, for this problem, you can assume 2 things:
    1. The Fib sequence starts with 0 (at index 0)
    2. The 2nd value in the Fib sequence is 1 (at index 1). 
*/

function findFibonacciValue(index) {
    // We know that negative integer arguments are invalid because there is no such thing as a Fibonacci value at a negative index. 
    if (index < 0) throw new Error("Invalid index value");

    // Given the information in the prompt, we can account for our first base case, i.e. whether the index value represents the 1st Fibonacci value in the sequence. 
    if (index === 0) return 0;

    // We have one more base case - we know that the 2nd Fibonacci value is 1, so let's account for that with a quick if statement. 
    if (index === 1) return 1;

    // And now our recursive case. The equation for each Fibonacci value is the sum of the two preceding value; therefore, we will need 2 recursive calls, one for each of the two preceding values. 
    return findFibonacciValue(index - 1) + findFibonacciValue(index - 2); 
};

console.log(findFibonacciValue(3)) // should return 2
console.log(findFibonacciValue(6)) // should return 8
   `;

  return (
    <div className="content">
      <h2>Recursion Problem #1 Solution</h2>
      <CodeEditor defaultCode={defaultCode} />
    </div>
  );
};

export default RecursionFour;
