const RecursionTwo = (props) => {
  return (
    <div className="content">
      <h2>Breaking Recursion Down</h2>

      <p>Within a recursive algo, there are 2 main things you need:</p>
      <ul>
        <li>A base case</li>
        <li>And a recursive case</li>
      </ul>

      <p>
        The base case (sometimes called the stopping condition) refers to the
        instance in a recursive algo where you want your algo to solve the given
        problem right away, rather than calling itself recursively again.{" "}
      </p>

      <p>
        On the other hand, the recursive case refers to the instance in your
        algo where the provided input is too complex to trigger the base case.
        When that happens, your recursive algo needs to recursively call itself
        instead in order to simplify the given input into an input that more
        closely resembles the stopping point of the base case.
      </p>

      <p>
        Eventually, for even the most complex inputs, the nature of your
        recursive algo will, when executed, take the provided input and simplify
        it into its most basic solution. At that point, your recursive algo will
        "bubble back up" (i.e. Leo Di Caprio trying to wake up), solving more
        complex solutions of your recursive algo with the knowledge from that
        "base case" solution. Finally, your algo will reach the original
        function call at the top of the call stack and solve that most complex
        solution of your recrusive algo with that original, very complex input.
      </p>

      <p>
        In the next couple pages, I'll provide you with a few examples of some
        common recursive algos you might see out there to help illustrate the
        info above.
      </p>
    </div>
  );
};

export default RecursionTwo;
