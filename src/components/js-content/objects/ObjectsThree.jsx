// Dependency imports
import { CodeEditor } from "../../index";

const ObjectsThree = (props) => {
  const defaultCode = `/*
    It is vital that you understand how to iterate through objecs in JavaScript. 
    You can do so in a few ways.
    One of the most common is the for... in loop 
    (you can find a link to all documentation listed below)
*/

    const sampleObj = {
        a: 1,
        b: 2,
        c: 3
    };

    for (let keyName in sampleObj) {
        console.log("Key name is: ", keyName)
        console.log("Value name is: ", sampleObj[keyName])
    };

    /*
    Upon running the provided code, you will notice that the loop logs both each key and its respective value. 
    */
`;

  return (
    <div className="content">
      <h2>Iterating through Objects Pt. I</h2>

      <CodeEditor defaultCode={defaultCode} />

      <aside>
        <p>Appendix: </p>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">
            {" "}
            for... in loop docs
          </a>
        </li>
      </aside>
    </div>
  );
};

export default ObjectsThree;
