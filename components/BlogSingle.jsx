import React from "react";
import Link from "next/link";

function BlogSingle(props) {
  return (
    <article className="blog-post md:w-3/5 md:mx-auto px-6 py-4">
      <Link href="/blog/bagaimana-kondisi-pendidikan-indonesia-saat-ini">
        <a>
          <h3 className="font-bold text-2xl hover:text-red-400 transition duration-150 ease-in-out">
            Bagaimana Kondisi Pendidikan Indonesia Saat Ini?
          </h3>
          <small className="block mb-6">22 Februari 2021 - 18:51</small>
        </a>
      </Link>
      <img
        src="/blog-assets/bagaimana-kondisi-pendidikan-indonesia-saat-ini.webp"
        alt=""
        className="w-full rounded-lg"
      />
      <p className="mt-5">
        Halo Kawan Gens, apa yang terlintas di pikiran kalian kalau mendengar
        kata “pendidikan Indonesia”?
      </p>
      <p className="mt-5">
        Kalau menurut pengamat pendidikan Mohammad Abduhzen, saat beliau
        dimintai tanggapan oleh Kompas.com terkait peringatan Hardiknas 2 Mei,
        Sabtu (2/5/2020), pendidikan Indonesia saat ini terlalu kaku,
        birokratis, dan hampa makna...
      </p>

      <Link href="/blog/bagaimana-kondisi-pendidikan-indonesia-saat-ini">
        <a className="block w-40 text-center text-sm mx-auto mb-12 mt-8 py-2 px-6 rounded-full border-2 border-gray-700 font-bold hover:bg-red-400 hover:text-white hover:border-0 transition duration-150 ease-in-out">
          Lebih lanjut..
        </a>
      </Link>
    </article>
  );
}

export default BlogSingle;
