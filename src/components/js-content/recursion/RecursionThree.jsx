// Module imports
import { CodeEditor } from "../../index";

const RecursionThree = (props) => {
  const defaultCode = `/*
    PROMPT: Write a recursive algorithm that accepts an integer representing an index value of a given number in the Fibonacci sequence, and returns the Fibonacci number at that index location. 

    FYI, for this problem, you can assume 2 things:
    1. The Fib sequence starts with 0 (at index 0)
    2. The 2nd value in the Fib sequence is 1 (at index 1). 
*/
   `;

  return (
    <div className="content">
      <h2>Recursion Practice Problem #1</h2>
      <CodeEditor defaultCode={defaultCode} />
    </div>
  );
};

export default RecursionThree;
