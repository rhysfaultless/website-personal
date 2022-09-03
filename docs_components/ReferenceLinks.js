import React from "react";

function ReferenceLink(props) {
  const index = props.index;
  const hyperlink = props.hyperlink;
  const author = props.author;
  const year = props.year;
  const title = props.title;
  return (
    <p>
      [<a href={hyperlink}>{index}]</a> {author}, {year}, {title}
    </p>
  );
}

export default ReferenceLink;
