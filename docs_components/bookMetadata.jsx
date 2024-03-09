//  docs_components/bookMetadata.jsx
//  props
//    author
//    asin
//    datePublished

import Admonition from "@theme/Admonition";

export default function BookMetadata(props) {
  const amazon_link = "https://www.amazon.com/dp/" + props.asin
  return (
    <Admonition
      type="caution"
      icon=" "
      title="Metadata"
    >
      <ul>
        <li>Author: <em>{props.author}</em></li>
        <li>Publication Date: <em>{props.datePublished}</em></li>
        <li>Amazon: <a href={amazon_link} target="_blank"><em>{props.asin}</em></a></li>
        {props.freeEbookBool && <li>Free Ebook: <a href={props.freeEbookHyperlink} target="_blank"><em>{props.freeEbookHyperlink}</em></a></li>}
      </ul>
    </Admonition>
  )
}
