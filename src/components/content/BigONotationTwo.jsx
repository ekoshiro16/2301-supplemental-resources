const BigONotationTwo = (props) => {
  return (
    <div className="content">
      <h2>How to Calculate Big O?</h2>
      <section>
        <h3>Time Complexity</h3>
        <p>
          Remember, you are primarily concerned with the number of computer
          operations occurring in your algorithm, not literally how much time a
          given algorithm takes to run!{" "}
        </p>
        <h4>Points to Remember:</h4>
        <ul className="content-list">
          <li>
            Go line by line, asking yourself: "How many times does this line of
            code run relative to the size of the input?"
          </li>
          <li>Notate next to each line of code what its Big O runtime is.</li>
          <li>
            Once you've calculated the Big O runtime of each line of code,
            simplify the algorithm's runtime by adding each line of code
            together into one value. Remember that lines of code run within
            iterative chunks of code (i.e. for loops) may run more than once. Be
            sure to account for that possible repetition within your final sum
            calculation.{" "}
          </li>
          <li>
            Once you've simplified the total value of Big O runtimes, drop any
            constant variables.
          </li>
          <li>
            The resulting simplified value, free of constants, is your
            algorithm's overall Big O runtime.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default BigONotationTwo;
