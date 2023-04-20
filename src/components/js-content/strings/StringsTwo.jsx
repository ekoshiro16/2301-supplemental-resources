// Dependency imports
import React, { useRef, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-cobalt";

const StringsTwo = (props) => {
  const editorRef = useRef(null);
  const outputEditorRef = useRef(null);

  const defaultCode = `/*
   PROMPT: Write an algorithm that reverses a string in-place.
   
   Sample outputs:
   reverseInPlace("hello") would return "olleh"
   reverseInPlace("hello world") would return "dlrow olleh"
  */
  `;

  const [editorContent, setEditorContent] = useState(defaultCode);
  const [output, setOutput] = useState("Output here...");

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  const handleExecuteClick = () => {
    if (editorRef.current) {
      const code = editorRef.current.editor.getValue();

      // Add a function wrapper around the user's code
      const wrappedCode = `return (function() {${code}})();`;

      // Store the original console.log function
      const originalConsoleLog = console.log;

      // Create an array to store logged messages
      const logMessages = [];

      // Override the console.log function
      console.log = (...args) => {
        logMessages.push(args.join(" "));
        originalConsoleLog.apply(console, args);
      };

      try {
        // Create a new function from the user's code and execute it
        const func = new Function(wrappedCode);
        const result = func();
        console.log(result);

        // Set the output to the collected log messages
        setOutput(logMessages.join("\n"));

        console.log("Made it to end of handleExecuteClick");
      } catch (error) {
        console.error("Error executing code:", error);
        setOutput(`Error: ${error.message}`);
      } finally {
        // Restore the original console.log function
        console.log = originalConsoleLog;
      }
    }
  };

  return (
    <div>
      <h2>Practice Problem</h2>
      <div className="practice-cont">
        <div className="editor-cont">
          <AceEditor
            mode="javascript"
            theme="cobalt"
            onChange={handleEditorChange}
            name="editor"
            editorProps={{ $blockScrolling: true }}
            value={editorContent}
            fontSize={12}
            showPrintMargin={false}
            showGutter={true}
            wrapEnabled={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
            width="80%"
            height="450px"
            ref={editorRef}
          />
          <div className="output-cont">
            <pre>{output}</pre>
          </div>
        </div>
        <button className="execute-bttn" onClick={handleExecuteClick}>
          Execute
        </button>
      </div>
    </div>
  );
};

export default StringsTwo;
