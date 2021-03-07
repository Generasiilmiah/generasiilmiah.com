import Head from "next/head";
import React from "react";

function BlogPost(props) {
  return (
    <article className="blog-post md:w-3/5 md:mx-auto px-6 py-4">
      <Head>
        <meta
          name="description"
          content="Buat kawan gens yang sedang belajar membuat karya tulis ilmiah, pasti
        suka mencari-cari dan membaca karya tulis ilmiah milik orang lain
        sebagai referensi."
        />
        <meta property="og:url" content="https://generasiilmiah.com/blog" />
        <meta
          property="og:image"
          content="https://generasiilmiah.com/blog-assets/pergi-ke-hutan-untuk-berkemah-yuk-menulis-karya-tulis-ilmiah.webp"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Buat kawan gens yang sedang belajar membuat karya tulis ilmiah, pasti
        suka mencari-cari dan membaca karya tulis ilmiah milik orang lain
        sebagai referensi."
        />
        <meta
          property="og:title"
          content="Pergi ke Hutan untuk Berkemah, Yuk Menulis Karya Tulis Ilmiah! - Generasi Ilmiah"
        />
        <title>
          Pergi ke Hutan untuk Berkemah, Yuk Menulis Karya Tulis Ilmiah! -
          Generasi Ilmiah
        </title>
      </Head>

      <h3 className="font-bold text-2xl">
        Pergi ke Hutan untuk Berkemah, Yuk Menulis Karya Tulis Ilmiah!
      </h3>
      <small className="block mb-6">07 Maret 2021 - 19:40</small>
      <img
        src="/blog-assets/pergi-ke-hutan-untuk-berkemah-yuk-menulis-karya-tulis-ilmiah.webp"
        alt=""
        className="w-full rounded-lg"
      />
      <p className="mt-5">Halo Kawan Gens,</p>
      <p className="mt-5">
        Buat kawan gens yang sedang belajar membuat karya tulis ilmiah, pasti
        suka mencari-cari dan membaca karya tulis ilmiah milik orang lain
        sebagai referensi. Namun, dari sekian banyak karya ilmiah, Kawan Gens
        harus memilih karya yang memenuhi standar karya tulis ilmiah yang baik
        sehingga nantinya dapat menghasilkan karya yang baik pula.
      </p>
      <p className="mt-5">
        Kali ini Genmin akan berbagi tips untuk memilih karya ilmiah yang baik
        sebagai referensi. Yuk, cusss!
      </p>
      <ol className="">
        <li className="mt-5">
          <p>
            • Kawan Gens bisa memilih referensi atau contoh karya ilmiah dari
            situs yang terpercaya, misalnya dari situs besar dan terkemuka atau
            bisa juga dari situs yang dikelola profesional dan bereputasi.
          </p>
        </li>
        <li className="mt-5">
          <p>
            • Setelah mendapatkan beberapa contoh karya ilmiah dari beberapa
            situs, Kawan Gens bisa membandingkan beberapa situs sekaligus,
            sehingga bisa mengetahui mana susunan yang paling tepat karena
            dipakai di lebih banyak situs.
          </p>
        </li>
        <li className="mt-5">
          <p>
            • Kawan Gens juga dapat meminta referensi dari orang-orang yang
            sudah sering menulis dan mempublikasikan karya tulis ilmiah,
            misalnya dari guru atau dosen untuk mendapatkan URL dari karya
            ilmiah di situs yang sudah dijamin kredibel.
          </p>
        </li>
        <li className="mt-5">
          <p>
            • Kawan Gens diasarankan untuk mengutamakan mencari karya ilmiah
            dari situs publikasi jurnal ilmiah, karena dijamin kredibel.
          </p>
        </li>
      </ol>
      <p className="mt-5">
        Nah, setelah kawan gens mendapat referensi tentang karya ilmiah, tentu
        Kawan Gens lebih dapat mengetahui susunan dan substansi karya ilmiah
        yang baik sehingga Kawan Gens bisa menulis karya ilmiah yang tidak kalah
        keren!
      </p>
      <p className="mt-5">Semangat berkarya, Kawan Gens!</p>
    </article>
  );
}

export default BlogPost;
