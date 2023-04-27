// Module imports
import leoMeme from "../../../leoMeme.jpeg";

const Recursion = (props) => {
  return (
    <div className="content">
      <h2>Recursion</h2>
      <section className="content-section">
        <p>
          Another common interview question pattern that can get thrown at you
          is that of "recursion". Recursion is, to put it lightly... difficult.
          It is one of the trickier programming topics to conceptualize mentally
          for even experienced programmers, so I will try to provide a few
          examples here to help you understand it.
        </p>

        <p>
          First off, let's get a technical definition out of the way. Recursion
          is a programming technique whereby a given function calls itself,
          directly or indirectly, in order to accomplish some sort of (usually
          iterative) task. The existence of a base case allows the recursive
          function to eventually reach a stopping point, whereby the recursion
          function begins to "bubble up" to the "surface" of the call stack in
          order to provide a given solution.{" "}
        </p>

        <p>
          Yes, that's a mouthful, and probably not the best way to start
          learning about recursion. Let's talk about it this way.
        </p>

        <p>
          You probably have seen the movie, "Inception", and if you haven't, you
          should definitely get to it (it's a great film). In short, the movie
          is about people who are able to enter the dreams of others. However,
          these dreams sometimes themselves contain dreams, like the person
          that's asleep dreaming that they're falling asleep in their actual
          dream. Our film's main characters attempt to solve problems in this
          dream-diving way, but they can only do so if they manage to reach the
          deepest level of the person's dream. This is only made more difficult
          when, you can imagine, there are people in the movie who have dreams
          within dreams within dreams, ad infinitum. A bunch of hijinks ensue,
          people pulling guns out of nowhere, Leo di Caprio squinting at
          everything. It's a zany movie. You should watch it.
        </p>

        <img src={leoMeme} />

        <p>
          Now let's think about recursion. In recursion, we have 2 cases: a
          recursive case, and a base case. A recursive case is a situation
          whereby the function calls itself, over and over again, until a base
          case is eventually reached. Once this base case is reached, a given
          problem is solved, and the resulting answer from that problem solving
          is given to the previous recursive case call. That recursive case call
          is solved using the answer from the base case, and then passes its
          answer to the previous recursive case call. This is repeated over and
          over again until the original recursive function call is reached,
          whereby the function finishes by outputting some final answer.{" "}
        </p>

        <p>
          Leo di Caprio and his dream-diving team do the exact same thing - they
          jump into a person's dream, and if that person's dream has another
          layer, they jump into that further dream layer. They keep going all
          the way down the dream layers until they eventually reach the deepest
          layer (i.e. the base case). Once they do, they solve the problem
          there, then, using that solution, return through all the previous
          layers to reach the dream's "surface". (You can think of this as a
          recursive function's "bubbling up" through the callstack, finishing
          previous recursive case calls along the way, until it reaches the
          original recursive function call).{" "}
        </p>

        <p>
          Yeah, it's a lot to take in. I've said it before, but I'll say it
          again. Recursion is tricky. You may not get it right away, and that's
          ok.
        </p>

        <p>
          My advice to you as you're learning recursion is to take your time and
          pace yourself, really asking yourself what is happening on each
          individual line of your recursive function. Diagram it out on a white
          board or piece of paper if you need to. It's important to be able to
          visualize what is going on in the context of these types of functions,
          so you aren't taken completely off guard live during an interview.
        </p>

        <p>
          In the next few pages, I'll show you some further breakdowns of
          recursion and some examples to practice with.{" "}
        </p>
      </section>
    </div>
  );
};

export default Recursion;
