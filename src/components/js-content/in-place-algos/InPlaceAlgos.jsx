const InPlaceAlgos = (props) => {
  return (
    <div className="content">
      <h2>In Place Algorithms</h2>

      <section>
        <p>
          A common type of technical interview topic that you might see is that
          of "in place" algorithms. The term, "in place", refers to the idea
          that a given algorithm manipulates only its direct input, and does not
          create any additional data structures in doing so.{" "}
        </p>

        <p>
          Another way you can think about in place algos is this. When I was
          little, I got really into Rubik's cubes, and eventually so did my baby
          sister too. While teaching my sister how to solve one, I showed her
          some mental strategies that she could use, instead of needing to do
          something inconvenient like getting a piece of paper to write down
          notes as you go along. Eventually, both my sister and I were able to
          do it entirely by memory (although I admit it did take us a while to
          learn).
        </p>

        <p>
          Solving a Rubik's cube is a whole lot like writing an in place
          algorithm. In the same way that my sister and I aimed to solve the
          cube without using any additional tools or supports, in place
          algorithms look to manipulate a given input without creating any
          additional data structures (i.e. arrays, objects, or long strings).
          It's just not as impressive to my mom if I tried to show off my
          Rubik's cube abilities by stopping every twist and turn along the way
          to write some notes down about what I did, or take photos of the
          cube's different states. Same goes for in place algos. You want to
          change this input directly without needing to make copies of the
          input, which would consume a ton of space anyhow.{" "}
        </p>

        <p>
          And that last point is the main selling point of in place algorithms.
          This idea of "in place" is especially important if you're looking to
          create an algorithm that is very efficient on space consumption.
          You'll usually find that in place algos tend to be pretty lightweight
          in their memory usage.{" "}
        </p>

        <p>
          Now, one quick caveat. In place algos don't mean that you can't create
          any other variables. Generally, variables that only consume constant
          space (i.e. O(1)) are ok. So numbers, booleans, small constant
          strings, etc. would be fine to employ during your algo solving.{" "}
        </p>

        <p>
          In the next few sections, you'll see some practice prompts for in
          place algos.
        </p>
      </section>
    </div>
  );
};

export default InPlaceAlgos;
