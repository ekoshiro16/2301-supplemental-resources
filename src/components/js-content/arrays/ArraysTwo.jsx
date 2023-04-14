const ArraysTwo = (props) => {
  return (
    <div className="content">
      <h2>Arrays</h2>

      <h3>Most Important Array Methods to Know for Technical Interviews</h3>

      <ul>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push">
            push()
          </a>
          <ul>
            <li>
              Adds one or more elements to the end of an array and returns the
              new length of the array
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop">
            pop()
          </a>
          <ul>
            <li>
              Removes the last element from an array and returns that element
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift">
            shift()
          </a>
          <ul>
            <li>
              Removes the first element from an array and returns that element
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift">
            unshift()
          </a>
          <ul>
            <li>
              Adds one or more elements to the beginning of an array and returns
              the new length of the array
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat">
            concat()
          </a>
          <ul>
            <li>Merges two or more arrays and returns a new array.</li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice">
            slice()
          </a>
          <ul>
            <li>
              Returns a shallow copy of a portion of an array into a new array
              object, without modifying the original array
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">
            splice()
          </a>
          <ul>
            <li>
              Adds or removes elements from an array, and returns an array of
              the removed elements, if any
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">
            indexOf()
          </a>
          <ul>
            <li>
              Returns the first index at which a given element is found in the
              array, or -1 if it is not found
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf">
            lastIndexOf()
          </a>
          <ul>
            <li>
              Returns the last index at which a given element is found in the
              array, or -1 if it is not found
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">
            forEach()
          </a>
          <ul>
            <li>Executes a provided function once for each array element</li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">
            map()
          </a>
          <ul>
            <li>
              Creates a new array populated with the results of calling a
              provided function on every element in the array
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">
            filter()
          </a>
          <ul>
            <li>
              Creates a new array with all elements that pass the test
              implemented by the provided function
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">
            reduce()
          </a>
          <ul>
            <li>
              Applies a function against an accumulator and each element in the
              array (from left to right) to reduce it to a single value
            </li>
          </ul>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some">
            some()
          </a>
          <ul>
            <li>
              Tests whether at least one element in the array passes the test
              implemented by the provided function
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ArraysTwo;
