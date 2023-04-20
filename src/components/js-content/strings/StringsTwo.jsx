// Module imports
import { CodeEditor } from "../../index";

const StringsTwo = (props) => {
  const defaultCode = `/*
   PROMPT: Write an algorithm that reverses a string in-place.
   
   Sample outputs:
   reverseInPlace("hello") would return "olleh"
   reverseInPlace("hello world") would return "dlrow olleh"
  */
  `;

  return (
    <div className="content">
      <h2>String Practice Problem</h2>
      <CodeEditor defaultCode={defaultCode} />
    </div>
  );
};

export default StringsTwo;
