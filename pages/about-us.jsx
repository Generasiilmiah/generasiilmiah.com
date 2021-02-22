import Head from "next/head";
import React from "react";
import SubpageHeader from "../components/SubpageHeader";

function AboutPage(props) {
  return (
    <div className="">
      <Head>
        <meta
          name="description"
          content="Generasi ilmiah adalah wadah berbasis online dan offline yang mampu memberikan kesempatan kepada peserta untuk belajar dalam bidang penelitian dan penalaran."
        />
        <meta property="og:url" content="https://generasiilmiah.com/about-us" />
        <meta
          property="og:image"
          content="https://generasiilmiah.com/logo/icon512.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Generasi ilmiah adalah wadah berbasis online dan offline yang mampu memberikan kesempatan kepada peserta untuk belajar dalam bidang penelitian dan penalaran."
        />
        <meta property="og:title" content="Tentang Kami - Generasi Ilmiah" />
        <title>Tentang Kami - Generasi Ilmiah</title>
      </Head>

      {/* <SubpageHeader bgImg="/img.jpg" /> */}
      <div
        className="cover-img cover-img-overlay-square rounded-none h-56 md:h-72 text-white md:mb-8 flex items-center justify-center"
        style={{ backgroundImage: `url('/assets/img/team.webp')` }}
      >
        <h2 className="serif-heading text-xl text-3xl md:text-4xl text-center my-8 relative z-10">
          Tentang Kami
        </h2>
      </div>

      <article className="about-us backdrop px-6 py-10 mt-12 mb-20 md:rounded-xl md:mx-6 md:container md:mx-auto">
        <div className="md:grid about-grid">
          <h4>Deskripsi</h4>
          <div>
            <p>
              Generasi ilmiah adalah wadah berbasis online dan offline yang
              mampu memberikan kesempatan kepada peserta didik tingkat sekolah
              dasar hingga perguruan tinggi dalam meningkatkan kualitas soft
              skills dalam bidang penelitian dan penalaran. Kami percaya bahwa
              perpaduan hard skills dan soft skills sangat diperlukan, terutama
              karena ketatnya persaingan pasar sehingga membutuhkan sumber daya
              manusia yang tidak hanya memiliki pendidikan yang memadai.
              Sehingga akhirnya Sumber Daya Manusia (SDM) dalam bidang nonformal
              pada kali ini merupakan salah satu faktor kunci dalam ketatnya
              persaingan, yakni bagaimana menciptakan SDM yang berkualitas dan
              memiliki ketrampilan serta berdaya saing tinggi dalam persaingan
              global.
            </p>
            <p>
              Kami hadir sebagai platform pendidikan nonformal untuk menjawab
              permsalahan dan membantu peserta didik dalam meningkatkan
              kemampuan diri agar menjadi bekal dimasa yang akan datang dalam
              berkuntribusi membawa perubahan untuk negeri. Generasi Ilmiah
              hadir dengan fokus dua bidang yang berbeda namun tetap satu
              kesatuan yang mampu relevan pada keterampilan diri seseorang yakni
              bidang penelitian dan penalaran. Pada bidang penelitian yang fokus
              pada pengajaran KTI, Essay, Business Plan, sedangka pada bidang
              penalaran fokus pada pengajaran Debat, Business Case Case Study.
            </p>
          </div>
        </div>

        <div className="md:grid about-grid mt-8">
          <h4>Motto</h4>
          <div>
            <p>“Kontributif, prestatif, inspiratif”</p>
          </div>
        </div>

        <div className="md:grid about-grid mt-8">
          <h4>Visi Misi</h4>
          <div>
            <h5 className="font-bold">Visi:</h5>
            <ol>
              <li>
                Mewujudkan Indonesia Maju dengan kontribusi dan inovasi penerus
                bangsa
              </li>
            </ol>

            <h5 className="font-bold">Misi:</h5>
            <ol>
              <li>
                1. Memberikan kesempatan dan ruang dalam meningkatkan minat dan
                bakat.
              </li>
              <li>
                2. Melaksanakan layanan dalam bidang penelitian dan penalaran
                secara efisien dan efektif.
              </li>
              <li>
                3. Pengembangan potensi,dalam pendidikan yang direalisasikan
                pada karya.
              </li>
              <li>
                4. Meningkatkan sistem pendidikan melalui kolaborasi dengan
                pihak internal dan eksternal.
              </li>
              <li>
                5. Mendorong inovasi pengembangkan ilmu pengetahuan yang
                bermanfaat dalam pemecahan masalah.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </div>
  );
}

export default AboutPage;
