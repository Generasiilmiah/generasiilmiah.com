import Head from "next/head";
import React from "react";
import ComingSoon from "../components/ComingSoon";

function Testimonial(props) {
  return (
    <>
      <Head>
        <meta name="description" content="Coming Soon" />
        <meta
          property="og:url"
          content="https://generasiilmiah.com/testimonial"
        />
        <meta
          property="og:image"
          content="https://generasiilmiah.com/logo/icon512.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Coming Soon" />
        <meta property="og:title" content="Tentang Kami - Generasi Ilmiah" />
        <title>Testimonial - Generasi Ilmiah</title>
      </Head>
      <ComingSoon bgImg="/assets/img/coming-soon.webp" />
    </>
  );
}

export default Testimonial;
