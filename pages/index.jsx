import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const words = [
    "ipsum dolor sit amet, consectetur adipisicing elit. Maiores, repellat eveniet itaque sint accusamus aspernatur nobis illo? Beatae veniam numquam dignissimos maiores, labore nobis nam possimus quasi illo vitae excepturi.",
    "consectetur Lorem ipsum dolor sit amet,  adipisicing elit. Maiores, repellat eveniet itaque sint accusamus aspernatur nobis illo? Beatae veniam numquam dignissimos maiores, labore nobis nam possimus quasi illo vitae excepturi.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, repellat eveniet itaque sint accusamus aspernatur nobis illo? Beatae veniam numquam dignissimos maiores, labore nobis nam possimus quasi illo vitae excepturi.",
    "Lodolor sit amet, consectetur adipisicing elit. Maiores, repellat eveniet itaque sint accusamus aspernatur nobis illo? Beatae veniam numquam dignissimos maiores, labore nobis nam possimus quasi illo vitae excepturi.",
    "dolor sit amet, consectetur adipisicing elit. Maiores, repellat eveniet itaque sint accusamus aspernatur nobis illo? Beatae veniam numquam dignissimos maiores, labore nobis nam possimus quasi illo vitae excepturi.",
    "ametLorem ipsum dolor sit , consectetur adipisicing elit. Maiores, repellat eveniet itaque sint accusamus aspernatur nobis illo? Beatae veniam numquam dignissimos maiores, labore nobis nam possimus quasi illo vitae excepturi.",
    "adipisicing ipsum dolor sit amet, consectetur elit. Maiores, repellat eveniet itaque sint accusamus aspernatur nobis illo? Beatae veniam numquam dignissimos maiores, labore nobis nam possimus quasi illo vitae excepturi.",
  ];

  const [newWord, setNewWord] = useState("");
  const [word, setWord] = useState(words[0]);
  const [nope, setNope] = useState(false);

  const shuffleWord = () => {
    setNewWord("");
    setWord(words[Math.floor(Math.random() * words.length)]);
  };

  // <timing>

  // </timing>

  const handleTyping = (e) => {
    let len = newWord.length;
    if (word == e.target.value) {
      setNope(false);
      setNewWord(e.target.value);
      setTimeout(() => {
        alert("you won");
        setNewWord("");
        shuffleWord();
      }, 100);
    } else if (e.target.value[len] == word[len]) {
      setNope(false);
      setNewWord(e.target.value);
      console.log(e.target.value[len], word[len]);
    } else {
      setNope(true);
    }
  };
  return (
    <main>
      <Header />
      <div className="container">
        <p
          onCopy={() => {
            return false;
          }}
          className="word unselectable"
        >
          {word}
        </p>
        {!nope ? <></> : <h3 className={"nope " + (nope && `nono`)}>NOPE</h3>}
        <input
          onpaste={() => {
            return false;
          }}
          onDrag={() => {
            return false;
          }}
          onDrop={() => {
            return false;
          }}
          autocomplete="off"
          className="textField"
          type="text"
          value={newWord}
          onChange={handleTyping}
        />

        <div className="buttons">
          <button className="nope" onClick={() => setNewWord("")}>
            {" "}
            RELOAD{" "}
          </button>
          <button className="nope" onClick={shuffleWord}>
            {" "}
            CHANGE WORD{" "}
          </button>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        main {
          height: 100vh;
        }
        .container {
          background: #f17;
          text-align: center;
          height: 80%;
          padding: 0px 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .unselectable {
          -webkit-user-select: none;
          -webkit-touch-callout: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          color: #cc0000;
        }
        .word {
          font-size: 18px;
          text-align: center;
          border: 2px dotlted wdhite;
          box-shadow: 0.1rem 0.001rem 1rem black;
          width: 75%;
          padding: 1vh;
          height: 10vh;
          display: flex;
          align-items: center;
          color: white;
        }

        @keyframes nop {
          0% {
            transform: translateX(50%);
            transition: all 0.2s;
          }
          25% {
            transform: translateX(-50%);
            transition: all 0.2s;
          }
          50% {
            transform: translateX(50%);
            transition: all 0.2s;
          }
          75% {
            transform: translateX(-50%);
            transition: all 0.2s;
          }
          100% {
            transform: translateX(50%);
            transition: all 0.2s;
          }
        }

        .nope {
          padding: 10px;
          margin: 14px;
          background: #fff;
          color: red;
        }

        .nono {
          transform: translateX(0%);
          transition: all 0.2s;
          animation-name: nop;
          animation-iteration-count: 5;
          animation-duration: 500ms;
        }

        .textField {
          width: 50vw;
          border: none;
          padding: 10px;
          height: 20px;
          margin: 20px 200px;
          box-shadow: 0.1rem 0.1rem 2rem black;
        }
      `}</style>

      <style jsx global>{`
        * {
          padding: 0;
          margin: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        header {
          height: 10%;
        }
        footer {
          display: flex;
          height: 10%;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 100%;
          background: #000;
          color: white;
        }
      `}</style>
    </main>
  );
}
