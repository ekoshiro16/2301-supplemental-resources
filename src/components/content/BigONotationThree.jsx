const BigONotationThree = (props) => {
  return (
    <div className="content">
      <h2>How to Calculate Big O? Pt. 2</h2>
      <section>
        <h3>Space Complexity</h3>
        <p>
          When we talk about space complexity in Big O, we're talking about the
          amount of memory or storage that an algorithm needs in order to
          execute. This is especially important to analyse when you're dealing
          with large amounts of data or you're constrained by fairly limited
          resources or storage space.
        </p>
        <p>
          Again, just like its importance when we measure time complexity, we
          are also concerned about the worts case scenario when it comes to our
          input size. While space may not be a concern with a small input size,
          we do need to be aware of and consider what happens if our system or
          application is suddenly put under heavy strain from a large incoming
          dataset.
        </p>
        <p>
          For example, think about how a multiplayer video game handles its
          active playerbase. If the server is only capable of sustaining a
          certain number of players, new players are prevented from joining
          until other active players have logged off and left the server. This
          type of failsafe allows the server to continually function, even if
          there is something like a sudden surge of interest in the game,
          causing a large swelling of the active playerbase. (You may sometimes
          notice how some video games that suddenly gain onlien virality can go
          down and crash because of the sudden growth in the size of the new
          active playerbase.)
        </p>
        <p>
          TL;DR: Measure the space complexity of your algorithms to allow
          yourself to make the best choices between algorithm solution options
          and their relative efficiency (or lack of).
        </p>
        <h4>Measuring Space</h4>
        <p>
          When we measure space, we consider variables. Since the purpose of
          variables in JavaScript is to store data for later usage, we must
          consider these lines of code in your space measurement notation.
        </p>
        <p>
          Be sure to also consider how your algorithm's code interacts with the
          input size. For example, if you have a while loop generating a global
          variable each time it iterates, that will impact your space
          complexity.
        </p>
        <h4>The Space Consumption of Certain Datatypes: </h4>
        <ul>
          <li>Numbers: O(1) constant space consumption</li>
          <li>Booleans: O(1)</li>
          <li>Undefined & Null: O(1)</li>
          <li>
            Strings: O(<em>n</em>), where <em>n</em> represents the number of
            characters stored in the string
          </li>
          <li>
            Arrays: O(<em>n</em>), where <em>n</em> represents the number of
            elements stored in the array
          </li>
          <li>
            Objects: O(<em>n</em>), where <em>n</em> represents the number of
            key-value pairs, or properties, stored in the object.
          </li>
          <p>
            Caveats: Empty strings, arrays, or objects only occupy O(1) space
            complexity. Only as the number of contain characters, elements, or
            properties increase does the space complexity become O(<em>n</em>).
          </p>
        </ul>
      </section>
    </div>
  );
};

export default BigONotationThree;
