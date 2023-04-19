// Dependency imports
import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = (props) => {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={handleEditorChange}
        name="editor"
        editorProps={{ $blockScrolling: true }}
        value={editorContent}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default CodeEditor;
