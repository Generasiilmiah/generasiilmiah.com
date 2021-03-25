import React from "react";

export default function CartItem(props) {
  return (
    <div className="py-4 px-4 flex gap-6 backdrop rounded-lg">
      <div className="w-24 h-38 rounded-xl bg-gray-300" />
      <div className="">
        <h3 className="text-lg font-bold mb-1">{props.title}</h3>
        <select
          name="package"
          value={props.pkg}
          onChange={(e) => {
            console.log(e);
            props.handlePkgChange(e.target.value, props.key);
          }}
          className="bg-white py-1 px-2 rounded-md shadow-lg"
        >
          <option value="basic">Basic</option>
          <option value="ultimate">Ultimate</option>
        </select>
        <p className="font-bold  mt-4">Rp {props.price}</p>
      </div>
    </div>
  );
}
