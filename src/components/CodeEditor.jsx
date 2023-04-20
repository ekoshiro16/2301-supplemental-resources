// Dependency imports
import React, { useRef, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-cobalt";

const CodeEditor = (props) => {
  const { defaultCode } = props;

  const editorRef = useRef(null);
  const outputEditorRef = useRef(null);

  const [editorContent, setEditorContent] = useState(defaultCode);
  const [output, setOutput] = useState("Output here...");

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  const handleExecuteClick = () => {
    if (editorRef.current) {
      const code = editorRef.current.editor.getValue();
      const wrappedCode = `return (function() {${code}})();`;
      const originalConsoleLog = console.log;
      const logMessages = [];

      console.log = (...args) => {
        logMessages.push(args.join(" "));
        originalConsoleLog.apply(console, args);
      };

      try {
        const func = new Function(wrappedCode);
        const result = func();

        if (result !== undefined) {
          console.log(result);
        }

        if (logMessages.length > 0) {
          setOutput(logMessages.join("\n"));
        } else {
          setOutput("Nothing logged or executed");
        }
      } catch (error) {
        console.error("Error executing code:", error);
        setOutput(`Error: ${error.message}`);
      } finally {
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

export default CodeEditor;
