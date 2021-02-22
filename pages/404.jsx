import React from "react";
import Link from "next/link";
import Head from "next/head";

function NotFound(props) {
  return (
    <div className="h-96 my-20 flex flex-col items-center justify-center">
      <Head>
        <title>Tidak Ditemukan - Generasi Ilmiah</title>
      </Head>

      <img
        src="/assets/svg/404.svg"
        alt="Tidak ditemukan"
        className="w-64 block mc-auto mb-8"
      />
      <h3 className="font-bold text-xl">Halaman tidak ditemukan!</h3>

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

export default NotFound;
