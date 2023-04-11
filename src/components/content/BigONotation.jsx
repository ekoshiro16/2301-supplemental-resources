const BigONotation = (props) => {
  return (
    <div className="content">
      <h2>Big O Notation</h2>

      <section>
        <p>
          Big O Notation refers to a type of mathematical notation to describe
          how well (or poorly) an algorithm performs. One of its primary uses is
          to identify the "worst case" scenario of a given algorithm, in terms
          of the proportional relationship between a given input (usually
          represented by a variable of <em>n</em>) and the amount of time or
          space (i.e. memory) consumed by the given algorithm.
        </p>
        <p>
          Even more specifically, we often use Big O Notation to analyse how an
          algorithm's complexity changes as the given input size grows. By doing
          so, a developer can accurately compare disparate algorithms and use
          cost-benefit analyses to pick which algorithm is best suited to that
          developer's goals and project context.
        </p>
        <p>
          For example, a developer could have 2 algorithm solutions available.
          The first solution consumes quadratic time complexity, but constant
          space (or O(n^2) time vs O(1) space), whereas the second solution
          consumes both linear time and space complexity (or O(n) time and
          space). The developer, if their goal is to make as lightweight of an
          app as possible (with regards to memory consumption) but does not care
          as much about runtime, may decide to use the first option. But if they
          want a more balanced application, they may decide on the second
          algorithm. As you can see, the usage of Big O Notation allows us to
          make informed decisions like this in whatever context we are put into
          while coding.
        </p>
      </section>
    </div>
  );
};

export default BigONotation;
