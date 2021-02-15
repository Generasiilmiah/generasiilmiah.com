import React from "react";
import Link from "next/link";
import BottomCta from "../components/BottomCta";
import Mengapa from "../components/Mengapa";
import Services from "../components/Services";

function index(props) {
  return (
    <div>
      <header className="md:pb-10 md:container md:mx-auto flex justify-between flex-col-reverse md:flex-row">
        <div className="header-cta px-6 md:w-2/5">
          <h2 className="serif-heading text-3xl pt-20 mb-4">
            Asah Kemampuan Penelitian dan Penalaranmu bersama Generasi Ilmiah!
          </h2>
          <p className="mb-20">
            Di Generasi Ilmiah, kamu akan memperoleh banyak ilmu dari
            mentor-mentor berpengalaman kami.
          </p>

          <div className="flex">
            <Link href="/kelas">
              <a className="block">
                <div
                  className="rounded-xl px-6 py-1.5 h-full mr-4 theme-bg text-white font-bold flex justify-center items-center"
                  style={{ boxSizing: "border-box" }}
                >
                  <p>Lihat Kelas</p>
                </div>
              </a>
            </Link>

            <Link href="/testimonial">
              <a className="block">
                <div
                  className="rounded-xl theme-border px-6 py-1.5 h-full flex justify-center items-center"
                  style={{ boxSizing: "border-box" }}
                >
                  <p>Testimonial</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className=" md:w-1/2 text-center flex items-center justify-center">
          <div className="relative header-decor-container">
            <img
              src="/assets/img/header.jpg"
              alt="Ilustrasi Kegiatan Ilmiah"
              className="img-obj img-header rounded-xl shadow-xl relative z-10"
            />
            <img
              src="/assets/svg/header-decor-1.svg"
              alt="Ilustrasi Kegiatan Ilmiah"
              className="absolute header-decor-1"
            />
            <img
              src="/assets/svg/header-decor-2.svg"
              alt="Ilustrasi Kegiatan Ilmiah"
              className="absolute header-decor-2"
            />
          </div>
        </div>
      </header>

      <Services />
      <Mengapa />

      <BottomCta img="/assets/img/btm-cta.jpg" />
    </div>
  );
}

export default index;
