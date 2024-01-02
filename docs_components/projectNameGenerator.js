//  docs_components/projectNameGenerator.js

import { React, useState } from "react";
import words_list from "@site/static/words/words.json"

export default function ProjectNameGenerator() {
  const length_of_words_list = words_list.words.length;
  const [firstWord, changeFirstWord] = useState(words_list.words[randomIntegerWithinWordsListLength()].word);
  const [secondWord, changeSecondWord] = useState(words_list.words[randomIntegerWithinWordsListLength()].word);
  
  function randomIntegerWithinWordsListLength() {
    return Math.floor(Math.random() * length_of_words_list);
  }
  
  function helperProjectNameGenerator() {
      changeFirstWord(words_list.words[randomIntegerWithinWordsListLength()].word);
      changeSecondWord(words_list.words[randomIntegerWithinWordsListLength()].word);
  }

  return (
    <div className="name-generator">
        <h2>{firstWord}{secondWord}</h2>
        <button onClick={helperProjectNameGenerator}>Click For A New Name</button>
    </div>
  )
}