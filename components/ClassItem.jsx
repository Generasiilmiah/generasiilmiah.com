import Link from "next/link";
import React from "react";

function ClassItem(props) {
  return (
    <Link href={`/kelas/${props.id}`}>
      <a
        data-aos="fade-up"
        data-aos-delay={props.delay * 150}
        data-aos-easing="ease-in-out"
        // data-aos-anchor-placement="top-center"
      >
        <div className="bg-white p-4 rounded-xl shadow-lg mb-6 hover:shadow-xl transition duration-150 ease-in-out class-selection">
          <div
            className="cover-img w-full h-56 mb-4 rounded-lg"
            style={{ backgroundImage: `url(${props.img})` }}
          ></div>
          <h4 className="font-bold text-lg mb-2">{props.title}</h4>
          <p>{props.children}</p>

          <div className="text-right mt-6">
            <small className="text-defocused line-through">
              Rp {props.priceBefore}
            </small>
            <h3 className="font-bold">Rp {props.price}</h3>
          </div>

          <div
            className="rounded-xl px-6 py-1.5 w-full mt-4 theme-bg text-white font-bold flex justify-center items-center cursor-pointer hover:bg-red-500 transition duration-150 ease-in-out"
            style={{ boxSizing: "border-box" }}
          >
            <p>Lebih lanjut</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ClassItem;
