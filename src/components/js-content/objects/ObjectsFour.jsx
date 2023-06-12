import { CodeEditor } from "../../index";

const ObjectsFour = (props) => {
  const defaultCode = `/*
Another way you can iterate through an object is by using either the Object.keys() or Object.values() methods. 
See examples below:
*/

const sampleObj = {
    a: 1,
    b: 2,
    c: 3
};

const sampleObjKeys = Object.keys(sampleObj) // will return ["a", "b", "c"];
console.log(sampleObjKeys); 

const sampleObjVals = Object.values(sampleObj) // will return [1, 2, 3]; 
console.log(sampleObjVals); 

/*
At this point, you can just iterate through the above arrays using a basic for or while loop.
*/
`;

  return (
    <div className="content">
      <h2>Iterating through Objects Pt. II</h2>
      <CodeEditor defaultCode={defaultCode} />

      <aside>
        <p>Appendix: </p>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys">
            {" "}
            Object.keys() docs
          </a>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values">
            {" "}
            Object.values() docs
          </a>
        </li>
      </aside>
    </div>
  );
};

export default ObjectsFour;
