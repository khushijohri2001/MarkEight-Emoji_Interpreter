import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "đ": "Love Letter",
  "đē": "Amphora",
  "đ": "Barber's Pole",
  "đī¸": "Bellhop Bell",
  "đ": "Confetti Ball",
  "đ": "Carp Streamer",
  "đ": "Wind Chime",
  "đ§ŋ": "Nazar Amulet",
  "âąī¸": "Umbrella on Ground",
  "đ": "Wrapped Gift",
  "đšī¸": "Joystick"
};
const EmojisWeHave = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("Translation will appear here");

  function emojiInputHandler() {
    var inputUser = event.target.value;
    var meaning = emojiDictionary[inputUser];

    if (meaning === undefined) {
      meaning = "We don't have this value in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ margin: "2rem", color: "#bf192a" }}>Emoji Interpreter</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Type emoji here to know the meaning"
      />
      <div style={{ margin: "1rem", color: "#42a8e3" }}>
        <i>{meaning}</i>
      </div>

      <h3>EmojisWeHave</h3>

      {EmojisWeHave.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
