// Module imports
import { CodeEditor } from "../../index";

const RecursionFive = (props) => {
  const defaultCode = `
/*
    Write a recursive function that takes a multidimensional array as an argument and returns the sum of all numerical values in that array. 
    
    For example, if you were given an array like:
    const sampleArgument = [1, [2, 3], [4, [5]]]
    Your function would return a sum of 15 (1 + 2 + 3 + 4 + 5).

    Write your code below: 
*/
    `;

  return (
    <div className="content">
      <h2>Recursion Problem #2: Multi-Dim-Sum</h2>
      <CodeEditor defaultCode={defaultCode} />
    </div>
  );
};

export default RecursionFive;
