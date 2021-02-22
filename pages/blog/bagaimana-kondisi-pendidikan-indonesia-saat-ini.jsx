import Head from "next/head";
import React from "react";

function BlogPost(props) {
  return (
    <article className="blog-post md:w-3/5 md:mx-auto px-6 py-4">
      <Head>
        <meta
          name="description"
          content="Halo Kawan Gens, apa yang terlintas di pikiran kalian kalau mendengar kata “pendidikan Indonesia”?"
        />
        <meta property="og:url" content="https://generasiilmiah.com/blog" />
        <meta
          property="og:image"
          content="https://generasiilmiah.com/blog-assets/bagaimana-kondisi-pendidikan-indonesia-saat-ini.webp"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Halo Kawan Gens, apa yang terlintas di pikiran kalian kalau mendengar kata “pendidikan Indonesia”?"
        />
        <meta
          property="og:title"
          content="Bagaimana Kondisi Pendidikan Indonesia Saat Ini? - Generasi Ilmiah"
        />
        <title>
          Bagaimana Kondisi Pendidikan Indonesia Saat Ini? - Generasi Ilmiah
        </title>
      </Head>

      <h3 className="font-bold text-2xl">
        Bagaimana Kondisi Pendidikan Indonesia Saat Ini?
      </h3>
      <small className="block mb-6">22 Februari 2021 - 18:51</small>
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
        birokratis, dan hampa makna.
      </p>
      <p className="mt-5">Wah, apa maksudnya, ya?</p>
      <p className="mt-5">
        Jadi, kalau menurut Genmin nih, pendidikan Indonesia terlalu terfokus
        pada nilai dan tidak beradaptasi dengan perkembangan zaman. Mata
        pelajaran yang diajarkan sejak zaman orang tua kita hingga sekarang
        pasti sama persis dan hanya mengalami sedikit perubahan. Padahal,
        kondisi dan kebutuhan kompetensi zaman sekarang dan zaman dulu tentu
        sangat berbeda. Selain itu, peserta didik juga tidak dibiasakan untuk
        mengeksplor peristiwa-peristiwa yang ada di sekitar, melainkan hanya
        ‘disuapi’ dengan materi-materi dari textbook.
      </p>
      <p className="mt-5">
        Pernah ga sih teman-teman Gens berpikir, “buat apa sih aku ngehapalin
        Hukum Newton? Atau lapisan tanah dan batuan yang menyusun bumi? Atau
        tabel periodik unsur?”
      </p>
      <p className="mt-5">
        Jawaban teman-teman mungkin, “buat menambah ilmu”? Yakin materi
        pelajaran itu masih diingat sampai sekarang? Hehe...
      </p>
      <p className="mt-5">
        Nah, tak lain itu juga karena substansi kurikulum pendidikan Indonesia
        yang menuntut peserta didik untuk mempelajari banyak mata pelajaran yang
        bahkan terkadang teman-teman tidak optimal di mata pelajaran tersebut.
        Efeknya, peserta didik jadi terbiasa untuk berpikir “apa yang
        dipelajari?” daripada mengembangkan pemikiran menjadi “mengapa harus
        mempelajari ini?”
      </p>
      <p className="mt-5">
        Efek lain dari kurikulum pendidikan Indonesia sekarang ini juga dapat
        ‘membunuh’ kreativitas peserta didik karena setiap peserta didik
        mempelajari hal yang sama, padahal setiap anak memiliki kecerdasan di
        bidang yang berbeda-beda.
      </p>
      <p className="mt-5">
        Apalagi di masa pandemi seperti ini, menurut Genmin, peserta didik
        seharusnya diberikan proyek kecil-kecilan yang dapat dilakukan di rumah
        sebagai media pembelajaran alih-alih tugas menumpuk yang justru membuat
        peserta didik semakin jenuh dan malas. Sayang sekali apabila hal ini
        terus berlanjut hingga masa-masa yang akan datang, padahal Genmin yakin
        banget kalau anak-anak indonesia pasti bisa menjadi generasi yang luar
        biasa apabila diasah dengan membiasakan mereka untuk berpikir dengan
        penalaran yang baik serta out of the box. Setuju nggak, Gens?
      </p>
    </article>
  );
}

export default BlogPost;
