const Components = (props) => {
  return (
    <div className="content">
      <h2>Intro & React Components</h2>
      <section className="content-section">
        <p>
          In this course, I assume that you already have a basic understanding
          of vanilla DOM manipulation, through the combination of HTML, CSS, and
          JavaScript. The basis for all of the content in this section is the
          frontend framework, ReactJS. By the end of this material, I hope that
          you find that React can accomplish much of what vanilla DOM
          manipulation can do, but even better!
        </p>

        <p>Let's begin by talking about React components. </p>

        <p>
          React, at its core, is built off of components. Well, what are
          components? <strong>Components</strong> are self-contained "chunks" of
          code, or modules, that are capable of quite a few things. They can
          manage their own internal state data, they can accept data from other
          components, they can even update your UI <em>automatically </em> based
          on user events or state updates, all with code snippets that are
          relatively easy to write syntax-wise.{" "}
        </p>

        <p>
          The way I personally like to think about components is to compare them
          to blueprints, the type that architects and construction workers use.
          A blueprint is a mockup of a building they're about to build. Once the
          workers or architects are given their actual building materials, they
          can assemble the subject of that blueprint relatively quickly.
          However, the specifications and building materials (i.e. their data)
          given to them may differ from home to home. One family may want a home
          painted red made of cedar wood, and another may want a blue home made
          with oak wood. However, the structure of their homes will remain
          relatively identical, since that's what their blueprint says.
        </p>

        <p>
          Components in React function quite similarly. You can assemble any
          configuration of code that you want for your UI in your components.
          Then, once you've done so, you can reuse that component over and over
          again, or whenever you need to replicate that specific configuration
          of code for your UI. On top of that, you can pass different sets of
          data to each rendering of the same component, allowing your UI to be
          rendered dynamically, rather than manually. This not only helps to
          make your frontend project codebase much more readable, but also far
          more modular and flexible in your construction of it.{" "}
        </p>

        <p>
          In the next page, I'll show you an example of what such a component's
          code could look like.{" "}
        </p>
      </section>
    </div>
  );
};

export default Components;
