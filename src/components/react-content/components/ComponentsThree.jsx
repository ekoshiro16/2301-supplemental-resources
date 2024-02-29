// Module imports
import { CodeEditor } from "../../index";

const ComponentsThree = (props) => {
  const defaultCode = `// First, we import the React library for use in this file.
import React from "react";

/* The next line of code is the basic syntax for a React class component. 
Note that we use JS syntax to first declare a class called "BasicComponent".
We then extend that "BasicComponent" from the React.Component prototype, which gives the "BasicComponent" access to its functionality. 
*/ 
class BasicComponent extends React.Component {
    // For React class components, we need to utilize the React.Component's "render" method so that this "BasicComponent" actually returns some chunk of code for our UI. 
    render() {
        return (
            <h1>I am a basic class component.</h1>
        );
    }
};

// Lastly, we export this "BasicComponent" so that we can use it wherever we want in our React project. 
export default BasicComponent; 
`;

  return (
    <div className="content">
      <h2>Class Component Syntax</h2>

      <p>
        <em>BasicComponent.jsx</em>
      </p>

      <CodeEditor defaultCode={defaultCode} />
    </div>
  );
};

export default ComponentsThree;
