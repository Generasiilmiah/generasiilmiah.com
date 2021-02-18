import React from "react";

function ClassItem(props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-xl mb-6">
      <div
        className="cover-img w-full h-48 mb-4 rounded-lg"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
      <h4 className="font-bold text-lg mb-2">{props.title}</h4>
      <p>{props.children}</p>
    </div>
  );
}

export default ClassItem;
