import React from "react";
import Emojidictionary from "../components/Emojidictionary";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1 className="heading">EmojiPedia</h1>
      <div class="d-flex flex-row">{emojipedia.map(EmojiDetails)}</div>
    </div>
  );
}

function EmojiDetails(emojipedia) {
  return (
    <Emojidictionary
      image={emojipedia.imageURL}
      name={emojipedia.name}
      data={emojipedia.data}
    />
  );
}

let newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.data.substring(0, 100);
});

console.log(newEmojipedia);

export default App;
