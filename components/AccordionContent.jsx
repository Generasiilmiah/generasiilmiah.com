import React from "react";

function AccordionContent(props) {
  return (
    <ul>
      {props.items.map((item, idx) => (
        <li className="px-4 py-3 border-b" key={idx}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default AccordionContent;
