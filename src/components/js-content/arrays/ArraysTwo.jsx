// Module imports
import { CodeEditor } from "../../index";

const ArraysTwo = (props) => {
  const defaultCode = `/*
   PROMPT: Write an algorithm that reverses an array of strings (each representing a word) in place, then re-reverses each word into its original order.
   
   Sample outputs:
   reverseArrayOfStr(["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]) 
    Should return:
    ["w", "o", "r", "l", "d", " ", "h", "e", "l", "l", "o"]

    reverseArrayOfStr(["h", "i", " ", "m", "y", " ", "n", "a", "m", "e", " ", "i", "s"])
    Should return:
    ["i", "s", " ", "n", "a", "m", "e", " ", "m", "y", " ", "h", "i"]
  */
  `;

  return <CodeEditor defaultCode={defaultCode} />;
};

export default ArraysTwo;
