//  docs_components/bookQuote.js
//  props
//    quote
//    page

import Admonition from "@theme/Admonition";

export default function ExperienceCard(props) {
  return (
    <Admonition
      type="note"
      icon=" "
      title=" "
    >
      <p>{props.quote}</p>
      <em>—P.6</em>
    </Admonition>
  )
}
