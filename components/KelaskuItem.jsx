import React from "react";

function KelaskuItem(props) {
  return (
    <div className="px-2 bg-white mb-6 shadow-lg">
      <div className="flex gap-4 py-2 border-b border-gray-400">
        <div className="rounded-lg border border-gray-400 img-overlay bg-gray-200 h-24 w-40"></div>
        <div className="">
          <h3 className="font-bold text-xl mb-1">Kelas Business Plan</h3>
          <p>
            <span className="py-1 px-5 text-white bg-red-400 rounded-full">
              Ultimate
            </span>{" "}
            Maret - April 2021
          </p>
        </div>
      </div>

      <div className="py-2 flex gap-6 items-center justify-end">
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
  );
}

export default KelaskuItem;
