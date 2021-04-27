import React from "react";

function TestimonialItem(props) {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 pb-10 md:pb-8 mb-10 w-4/5 mx-auto rounded-lg backdrop cursor-pointer shadow-lg">
      <div
        className="w-full md:w-32 h-40 bg-gray-400 rounded-lg md:flex-shrink-0"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="">
        <p className="text-lg md:text-xl italic">{props.children}</p>

        <h4 className="mt-6 md:mt-4 font-bold">{props.name}</h4>
        <small>{props.class}</small>
      </div>
    </div>
  );
}

export default TestimonialItem;
