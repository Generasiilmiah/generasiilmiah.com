import Head from "next/head";
import React from "react";

function BlogPost(props) {
  return (
    <article className="blog-post md:w-3/5 md:mx-auto px-6 py-4">
      <Head>
        <meta
          name="description"
          content="BMC adalah sebuah sarana yang dikembangkan oleh Alexander Osterwalder, yang dipopulerkan melalui bukunya Business Model Generation"
        />
        <meta property="og:url" content="https://generasiilmiah.com/blog" />
        <meta
          property="og:image"
          content="https://generasiilmiah.com/blog-assets/apa-itu-business-model-canvas.webp"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="BMC adalah sebuah sarana yang dikembangkan oleh Alexander Osterwalder, yang dipopulerkan melalui bukunya Business Model Generation."
        />
        <meta
          property="og:title"
          content="Apa itu Business Model Canvas (BMC)? - Generasi Ilmiah"
        />
        <title>Apa itu Business Model Canvas (BMC)? - Generasi Ilmiah</title>
      </Head>

      <h3 className="font-bold text-2xl">
        Apa itu Business Model Canvas (BMC)?
      </h3>
      <small className="block mb-6">14 Maret 2021 - 19:44</small>
      <img
        src="/blog-assets/apa-itu-business-model-canvas.webp"
        alt=""
        className="w-full rounded-lg"
      />
      <p className="mt-5">
        BMC adalah sebuah sarana yang dikembangkan oleh Alexander Osterwalder,
        yang dipopulerkan melalui bukunya Business Model Generation. BMC
        dikembangkan dengan tujuan untuk membantu organisasi bisnis dan
        pengusaha pemula untuk memetakan dan melakukan analisis model bisnis
        mereka.
      </p>
      <p className="mt-5 mb-4">
        BMC terdiri dari 3 bagian utama. Bagian tersebut adalah offering,
        customer, dan infrastructure.
      </p>
      <img src="/blog-assets/bmc1.png" alt="" className="w-76 text-center" />
      <p className="mt-5">
        Dari 3 bagian tersebut BMC dikembangkan lagi dengan menyusun 9 blok
        utama yang harus diperhatikan dalam memetakan model bisnis. Kesembilan
        blok utama ini, semua terangkum dalam satu canvas (1 halaman). Inilah
        yang juga membuat BMC unggul karena dengan hanya terdiri dari 1 halaman
        ini, ternyata powerful untuk memberikan pemahaman tentang model bisnis
        secara utuh.
      </p>
      <p className="mt-5 mb-4">9 blok BMC tuh apa aja, sih?</p>
      <img src="/blog-assets/bmc2.png" alt="" className="w-76 text-center" />
      <p className="mt-5">
        “Maksudnya Key partners, key activities, itu apasih, Genmin?” Biar ga
        makin penasaran, yuk langsung aja daftar kelas Business Plan, hehe
      </p>
      <p className="mt-5">
        Untuk urutan mengisinya sesuai urutan di bawah ini ya!
      </p>
      <ol className="pl-4">
        <li>1. Customer Segments</li>
        <li>2. Value Proposition</li>
        <li>3. Channels</li>
        <li>4. Customer Relationship</li>
        <li>5. Revenue Streams</li>
        <li>6. Key Activities</li>
        <li>7. Key Resources</li>
        <li>8. Key Partnership</li>
        <li>9. Cost Structure</li>
      </ol>
      <p className="mt-5">Lalu, apa manfaat dan kelebihan BMC?</p>
      <ol className="pl-4">
        <li>
          1. FOKUS: BMC mampu menajamkan fokus dan membuat kejelasan mengenai
          model bisnis yang diajukan, lebih praktis jika dibandingkan dengan
          membuat rencana bisnis yang tebalnya berhalaman – halaman.
        </li>
        <li>
          2. FLEKSIBEL: BMC sangat bermanfaat karena mudah untuk dimodifikasi
          dengan tetap memberi pandangan secara menyeluruh terhadap model bisnis
        </li>
        <li>
          3. TRANSPARANSI: BMC seringkali digunakan untuk mengomunikasikan visi
          dan model bisnis kepada tim, dan dengan BMC tim menjadi lebih mudah
          mengerti apa model bisnis di organisasi.
        </li>
      </ol>

      <small className="block mt-5 text-gray-500">
        Referensi: aryahermawan.net
      </small>
    </article>
  );
}

export default BlogPost;
