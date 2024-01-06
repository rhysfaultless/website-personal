//  docs_components/projectNameGenerator.js

import { React, useState } from "react";
import words_list from "@site/static/words/words.json"

export default function ProjectNameGenerator() {
  const length_of_words_list = words_list.words.length;
  const [firstWord, changeFirstWord] = useState(words_list.words[randomIntegerWithinWordsListLength()]);
  const [secondWord, changeSecondWord] = useState(words_list.words[randomIntegerWithinWordsListLength()]);
  
  function randomIntegerWithinWordsListLength() {
    return Math.floor(Math.random() * length_of_words_list);
  }
  
  function helperProjectNameGenerator() {
      changeFirstWord(words_list.words[randomIntegerWithinWordsListLength()]);
      changeSecondWord(words_list.words[randomIntegerWithinWordsListLength()]);
  }

  return (
    <div className="name-generator">
        <h2>{firstWord}{secondWord}</h2>
        <button onClick={helperProjectNameGenerator}>Click For A New Name</button>
    </div>
  )
}