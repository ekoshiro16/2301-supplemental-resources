// Dependency imports
import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-cobalt";

const StringsTwo = (props) => {
  const defaultCode = `/*
   PROMPT: Write an algorithm that reverses a string in-place.
   
   Sample outputs:
   reverseInPlace("hello") would return "olleh"
   reverseInPlace("hello world") would return "dlrow olleh"
  */
  `;

  const [editorContent, setEditorContent] = useState(defaultCode);

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  return (
    <div>
      <h2>Practice Problem</h2>
      <AceEditor
        mode="javascript"
        theme="cobalt"
        onChange={handleEditorChange}
        name="editor"
        editorProps={{ $blockScrolling: true }}
        value={editorContent}
        fontSize={12}
        showPrintMargin={true}
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
        height="400px"
      />
    </div>
  );
};

export default StringsTwo;
