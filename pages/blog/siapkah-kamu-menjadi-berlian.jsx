import Head from "next/head";
import React from "react";

function BlogPost(props) {
  return (
    <article className="blog-post md:w-3/5 md:mx-auto px-6 py-4">
      <Head>
        <meta
          name="description"
          content="Kawan Gens pernah dengar peribahasa “Berlian dimanapun akan tetap
        menjadi berlian. Sekalipun di kubangan lumpur, berlian tetaplah
        berlian.”?"
        />
        <meta property="og:url" content="https://generasiilmiah.com/blog" />
        <meta
          property="og:image"
          content="https://generasiilmiah.com/blog-assets/siapkah-kamu-menjadi-berlian.webp"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Kawan Gens pernah dengar peribahasa “Berlian dimanapun akan tetap
        menjadi berlian. Sekalipun di kubangan lumpur, berlian tetaplah
        berlian.”?"
        />
        <meta
          property="og:title"
          content="Siapkah kamu menjadi berlian? - Generasi Ilmiah"
        />
        <title>Siapkah kamu menjadi berlian? - Generasi Ilmiah</title>
      </Head>

      <h3 className="font-bold text-2xl">Siapkah kamu menjadi berlian?</h3>
      <small className="block mb-6">02 Maret 2021 - 19:34</small>
      <img
        src="/blog-assets/siapkah-kamu-menjadi-berlian.webp"
        alt=""
        className="w-full rounded-lg"
      />
      <p className="mt-5">
        Kawan Gens pernah dengar peribahasa “Berlian dimanapun akan tetap
        menjadi berlian. Sekalipun di kubangan lumpur, berlian tetaplah
        berlian.”? Genmin yakin Kawan Gens pasti pernah mendengar dan bahkan
        mengetahui arti dari peribahasa tersebut.
      </p>
      <p className="mt-5">
        Nah, di artikel kali ini nih, Genmin bakal bahas 5 cara untuk menjadi
        seorang berlian! Alias menjadi pribadi yang berkualitas dan memiliki
        kapasitas diri!
      </p>
      <ol className="">
        <li className="mt-5">
          <h3 className="font-bold">1. Fokus mengasah minat</h3>
          <p>
            Kawan Gens pasti punya satu hal yang paling diminati, misalnya suka
            menulis, jago matematika, public speaking, dan lain sebagainya. Nah,
            dari minat tersebut, Kawan Gens bisa belajar untuk mengasah
            kemampuan tersebut agar semakin expert!
          </p>
        </li>
        <li className="mt-5">
          <h3 className="font-bold">
            2. Jangan pernah berhenti belajar dan perbanyak membaca
          </h3>
          <p>
            Belajar adalah kegiatan seumur hidup yang bisa dilakukan dimana saja
            dan kapan saja. Membaca juga merupakan kegiatan bermanfaat yang
            dapat menambah wawasan serta perspektif baru terhadap suatu hal. Hal
            ini juga merupakan salah satu cara untuk meningkatkan kemampuan
            berpikir kritis, loh!
          </p>
        </li>
        <li className="mt-5">
          <h3 className="font-bold">3. Membuka relasi</h3>
          <p>
            Selain dengan membaca, membuka relasi juga dapat menambah wawasan
            dan meningkatkan interpersonal skill kita. Membuka relasi dapat
            dilakukan dengan bergabung dalam komunitas atau organisasi yang
            dapat mengasah skill mengemukakan pendapat, bekerja dalam tim, dan
            masih banyak lagi.
          </p>
        </li>
        <li className="mt-5">
          <h3 className="font-bold">4. Tantang dirimu</h3>
          <p>
            Ini merupakan salah satu cara untuk mengukur seberapa jauh
            kemampuanmu dalam suatu bidang. Salah satunya dapat dilakukan dengan
            mengikuti berbagai perlombaan. Perlombaan juga akan menambah relasi
            dan pengalamanmu!
          </p>
        </li>
        <li className="mt-5">
          <h3 className="font-bold">5. Ikuti pelatihan </h3>
          <p>
            Pelatihan merupakan sarana yang cukup efektif untuk meningkatkan
            kemampuanmu dalam suatu bidang, karena dalam suatu pelatihan akan
            ada seorang mentor atau coach yang sudah berpengalaman di bidangnya.
            Dengan berlatih kepada mentor atau coach, kamu akan lebih paham
            mengenai tips dan trik di bidang yang kamu minati.
          </p>
        </li>
      </ol>
      <p className="mt-5">
        Kalau Kawan Gens berminat di bidang penelitian dan penalaran, tentu
        Generasi Ilmiah adalah pilihan yang tepat! Hehehe...
      </p>
      <p className="mt-5">Jadi, siapkah kamu menjadi berlian?</p>
    </article>
  );
}

export default BlogPost;
