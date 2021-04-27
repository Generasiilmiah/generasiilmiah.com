import React from "react";
import Link from "next/link";

import BottomCta from "../components/BottomCta";
import Mengapa from "../components/Mengapa";
import Services from "../components/Services";
import HomeClass from "../components/HomeClass";

import classIndex from "../kelas.json";
import Head from "next/head";
import HomeTestimonial from "../components/HomeTestimonial";

function index(props) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Asah kemampuan penelitian dan penalaranmu bersama Generasi Ilmiah! Kami menawarkan kelas online bertema penelitian dengan garansi output."
        />
        <meta property="og:url" content="https://generasiilmiah.com/" />
        <meta
          property="og:image"
          content="https://generasiilmiah.com/logo/icon512.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Asah kemampuan penelitian dan penalaranmu bersama Generasi Ilmiah! Kami menawarkan kelas online bertema penelitian dengan garansi output."
        />
        <meta
          property="og:title"
          content="Generasi Ilmiah - Les Karya Tulis Ilmiah"
        />
        <title>Generasi Ilmiah - Les Karya Tulis Ilmiah</title>
      </Head>

      <header className="md:pb-10 md:container md:mx-auto flex md:justify-between flex-col-reverse md:flex-row overflow-x-hidden">
        <div
          className="header-cta px-6 md:w-2/5"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
        >
          <h2 className="serif-heading text-3xl md:pt-20 mb-4">
            Asah Kemampuan Penelitian dan Penalaranmu bersama Generasi Ilmiah!
          </h2>
          <p className="mb-20">
            Kami menawarkan kelas online bertema penelitian dengan garansi
            output. Bersama kami, kamu akan memperoleh banyak ilmu dari
            mentor-mentor berpengalaman kami!
          </p>

          <div className="flex">
            <Link href="/kelas">
              <a className="block">
                <div
                  className="rounded-xl px-6 py-1.5 h-full mr-4 theme-bg text-white font-bold flex justify-center items-center hover:bg-red-500 transition duration-150 ease-in-out"
                  style={{ boxSizing: "border-box" }}
                >
                  <p>Lihat Kelas</p>
                </div>
              </a>
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=6281370369566&text=Halo%20Generasi%20Ilmiah!">
              <a rel="noopener noreferrer" target="_blank" className="block">
                <div
                  className="rounded-xl theme-border px-6 py-1.5 h-full flex justify-center items-center hover:border-5"
                  style={{ boxSizing: "border-box" }}
                >
                  <p>Kontak Kami</p>
                </div>
              </a>
            </Link>
          </div>
        </div>

        <div
          className="header-img w-full px-6 md:px-0 md:w-1/2 text-center flex items-center justify-center"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-easing="ease-in-out"
        >
          <div className="relative header-decor-container">
            <img
              src="/assets/img/header.webp"
              alt="Ilustrasi Kegiatan Ilmiah"
              className="img-obj img-header rounded-xl shadow-xl relative z-10"
            />
            <img
              src="/assets/svg/header-decor-1.svg"
              alt="Ilustrasi Kegiatan Ilmiah"
              className="absolute header-decor-1 hidden md:block"
            />
            <img
              src="/assets/svg/header-decor-2.svg"
              alt="Ilustrasi Kegiatan Ilmiah"
              className="absolute header-decor-2 hidden md:block"
            />
          </div>
        </div>
      </header>

      <HomeTestimonial />
      <Services />
      <Mengapa />
      <HomeClass classes={props.classes} index={props.index} />

      <BottomCta img="/assets/img/btm-cta.webp" />
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { ...classIndex },
  };
}

export default index;
