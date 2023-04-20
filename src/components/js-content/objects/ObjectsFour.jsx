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
At this point, you can just iterate through the returned arrays using a basic for or while loop, depending on whether you need the object's keys, values, or both
*/
`;

  return (
    <div className="content">
      <h2>Iterating through Objects Pt. II</h2>
      <CodeEditor defaultCode={defaultCode} />
    </div>
  );
};

export default ObjectsFour;
