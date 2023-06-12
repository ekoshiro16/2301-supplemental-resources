const ComponentsTwo = (props) => {
  return (
    <div className="content">
      <h2>The Anatomy of a React Component</h2>
      <section className="content-section">
        <p>
          Like many frameworks, React requires us to write our components using
          a particular syntax. In fact, there are actually 2 ways to write React
          components:
        </p>

        <ul>
          <li>Class Components</li>
          <li>Functional Components, which were introduced in React v16.8</li>
        </ul>

        <p>
          For the sake of simplicity, I will be using functional components
          throughout the rest of this React content. However, I will also
          briefly show you an example of a class component's syntax here as
          well, just to be thorough.{" "}
        </p>

        <p>
          So what are the differences between these 2 types of components? Well,
          class components are actually JavaScript ES6 classes. They extend from
          the `React.Component` prototype and utilize a method called "render"
          to create the actual React element. Prior to the introduction of
          functional components, class components were the sole way you could
          access various features in React (which we will be exploring later in
          this React section).{" "}
        </p>

        <p>
          Functional components, on the other hand, are simply JavaScript
          functions that return some React code and which also allow you to
          access the same React features that class components can. You can also
          write these functional components as either simple function
          declarations, or as arrow expressions.{" "}
        </p>

        <p>
          The main takeaway, though, about both of these types of components is
          that they are modular tools that allow you to effectively create
          "blueprints", or flexible and repeatable chunks of code, to be used
          throughout your UI. This is, of course, a fairly paired down
          definition, as you will see later on that we can configure our
          components to do much more than necessarily meets the eye.{" "}
        </p>

        <p>
          In the next section, we'll take a brief look at what a class
          component's syntax looks like.{" "}
        </p>
      </section>
    </div>
  );
};

export default ComponentsTwo;
