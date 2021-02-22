import React from "react";
import Link from "next/link";

function Construction(props) {
  return (
    <div className="h-96 my-20 flex flex-col items-center justify-center">
      <img
        src="/assets/img/contruction.png"
        alt="Sedang dalam pengembangan"
        className="w-48 block mc-auto mb-8"
      />
      <h3 className="font-bold text-xl">Fitur ini sedang dikembangkan!</h3>

      <div className="flex mt-10">
        <Link href="/">
          <a className="block">
            <div
              className="rounded-xl px-6 py-1.5 h-full mr-4 theme-bg text-white font-bold flex justify-center items-center hover:bg-red-500 transition duration-150 ease-in-out"
              style={{ boxSizing: "border-box" }}
            >
              <p>Ke Beranda</p>
            </div>
          </a>
        </Link>

        <Link href="/kelas">
          <a className="block">
            <div
              className="rounded-xl theme-border px-6 py-1.5 h-full flex justify-center items-center hover:border-5"
              style={{ boxSizing: "border-box" }}
            >
              <p>Lihat Kelas</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Construction;
