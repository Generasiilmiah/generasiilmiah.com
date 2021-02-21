import React from "react";

function AccordionTitle(props) {
  return (
    <div className="py-3 px-4 bg-red-50 font-bold border-b flex items-center justify-between">
      <h3>{props.title}</h3>
      <img
        src="/assets/svg/dropdown.svg"
        alt=""
        className="accordion-dropdown"
      />
    </div>
  );
}

export default AccordionTitle;
