import React from "react";

function ClassDetail(props) {
  return (
    <div className="py-4 px-4">
      <h3 className="font-bold text-xl mb-8">Detail Kelas</h3>

      <div className="flex gap-4 py-2 border-b border-gray-400">
        <div className="rounded-lg border border-gray-400 img-overlay bg-gray-200 h-24 w-40"></div>
        <div className="">
          <div className="">
            <h3 className="font-bold text-xl mb-1">Kelas Business Plan</h3>
            <p>
              <span className="py-1 px-5 text-white bg-red-400 rounded-full">
                Ultimate
              </span>{" "}
              Maret - April 2021
            </p>
          </div>

          <div className="flex gap-6 items-center justify-start">
            <button className="py-2 px-5 rounded-lg bg-red-400 text-white font-bold flex items-center">
              <img src="/assets/svg/view.svg" alt="" className="mr-4" />
              <p>Modul</p>
            </button>
            <button
              className="py-2 px-5 rounded-lg bg-white border border-gray-500"
              onClick={() => props.openModal()}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassDetail;
