import bigOGraph from "/assets/bigOGraph.png";

const BigONotationFour = (props) => {
  return (
    <div className="content">
      <h2>Additional Resources:</h2>
      <ul>
        <li>
          <a target="_blank" href="https://www.bigocheatsheet.com/">
            Big O Cheatsheet
          </a>
          <ul>
            <li>
              This website provides a comprehensive list of the time
              complexities of various algorithms and data structures, along with
              a comparison of their growth rates.
            </li>
          </ul>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/"
          >
            Big O Examples
          </a>
          <ul>
            <li>
              GeeksForGeeks has a good rundown of Big O and some examples of
              analysing algorithms.
            </li>
          </ul>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/watch?v=v4cd1O4zkGw">
            Gayle Laaakman McDowell's Video on Big O Notation
          </a>
          <ul>
            <li>
              Gayle Laakman McDowell is a very well-respected coding teacher,
              and her video on Big O Notation has one of the better primers on
              it that I've seen around.
            </li>
          </ul>
        </li>
      </ul>
      <h4>Big O Runtime Analysis:</h4>
      <div id="big-o-graph-img-cont">
        <img id="big-o-graph-img" src={bigOGraph} />
      </div>
    </div>
  );
};

export default BigONotationFour;
