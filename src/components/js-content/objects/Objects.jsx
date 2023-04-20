const Objects = (props) => {
  return (
    <div className="content">
      <h2>Objects</h2>

      <h3>Most Important Object Methods to Know for Technical Interviews</h3>

      <ul>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create">
            Object.create(objPrototype)
          </a>
          <ul>
            <li>
              Returns a new object that is "mirrored" off of the provided
              prototype object
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries">
            Object.entries(objName)
          </a>
          <ul>
            <li>
              Returns an array containing a given object's key-value pairs
            </li>
            <li>
              Each element in this return array is an array with 2 elements, the
              first of which is the key name, and the second the key's value
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze">
            Object.freeze(objName)
          </a>

          <ul>
            <li>
              This method prevents the given object from being changed or
              mutated in any way (i.e. freezing it)
            </li>
            <li>Returns the object that was given to the method</li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">
            Object.getOwnPropertyNames(objName)
          </a>

          <ul>
            <li>
              Returns an array of all of the given object's property, or key,
              names
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values">
            Object.values(objName)
          </a>
          <ul>
            <li>Returns an array containing all of a given object's values</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Objects;
