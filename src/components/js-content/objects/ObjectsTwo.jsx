const ObjectsTwo = (props) => {
  return (
    <div className="content">
      <h2>Pass By Reference: Objects</h2>
      <section>
        <p>
          One really important thing to remember is that in JavaScript, objects
          are <em>passed by reference</em>. This can be especially important to
          know, for example, if your interviewer gives you a prompt that
          specifically asks that you do not modify the original input of your
          solution algorithm.
        </p>

        <p>
          So what does pass by reference mean? Well, let me explain it like
          this. My mom and I are big fans of the reality show,{" "}
          <em>"Keeping up with the Kardashians"</em>. Sometimes, because my mom
          is a bit of a funny old person, will share with me a Google sheets
          spreadsheet that lists out her favorite episodes, their episode
          numbers, and the key points of gossip to remember from each episode.
          (Unironically this has actually been a great way for me to keep up
          with all the drama of the show).{" "}
        </p>

        <p>
          So how does this relate to objects passed by reference? Well, think of
          my mom's Google sheets spreadsheet. Since she shared it with me on
          Google Drive, if I make any edits to it, it will permanently alter her
          original list. When my mom next logs onto Google drive, she will see
          my changes appear on her own computer, since we are using a shared
          copy of the list.
        </p>
        <p>
          Compare this situation to, instead, if my mom had mailed me a copy of
          her <em>"KUWTK"</em> list. Then if I had made copies to her list with
          a pencil, her original list will not have been changed in any way,
          since I'm only writing on a paper copy of it.
        </p>

        <p>
          This is exactly how objects in JavaaScript work. For example, if you
          pass a reference to an object into a given function, any changes made
          to that object through that reference will also affect the original
          object, in the exact same way that me making edits to my mom's{" "}
          <em>"KUWTK"</em> spreadsheets on Google Drive permanently changes them
          too.
        </p>
      </section>
    </div>
  );
};

export default ObjectsTwo;
