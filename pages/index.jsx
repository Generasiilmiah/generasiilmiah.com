import React from "react";
import BottomCta from "../components/BottomCta";
import Mengapa from "../components/Mengapa";
import Services from "../components/Services";

function index(props) {
  return (
    <div>
      <header className="md:container md:mx-auto">
        <div className="header-cta px-6">
          <h2 className="serif-heading text-3xl my-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>

          <div className="flex">
            <div
              className="rounded-xl w-20 h-9 bg-yellow-500 text-white font-bold"
              style={{ boxSizing: "border-box" }}
            >
              <p>Masuk</p>
            </div>
            <div
              className="rounded-xl ring-2 ring-gray-600 w-20 h-9 flex justify-center items-center"
              style={{ boxSizing: "border-box" }}
            >
              <p>Masuk</p>
            </div>
          </div>
        </div>
      </header>

      <Services />
      <Mengapa />

      <BottomCta />
    </div>
  );
}

export default index;
