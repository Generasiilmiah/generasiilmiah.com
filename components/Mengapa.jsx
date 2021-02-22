import HomeSectionHeader from "./HomeSectionHeader";
import MengapaItem from "./MengapaItem";

function Mengapa(props) {
  return (
    <section className="px-6 pb-10 md:mb-14 pt-2 mt-8 backdrop">
      <div className="md:flex md:container md:mx-auto">
        <div className=" mb-8 md:mb-0 md:pr-10 md:w-1/2">
          <HomeSectionHeader
            title="Mengapa Generasi Ilmiah?"
            isCenter="hybrid"
          />
          <p className="text-sm md:text-base" data-aos="fade-in">
            Kami memiliki fokus dalam bidang penelitian dan penalaran sehingga
            kelak mampu menciptakan inovasi yang mampu diimplementasikan. Kami
            akan membimbing dalam meningkatkan minat penelitian kamu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-9 md:mb-4 md:w-1/2 md:ml-4">
          <MengapaItem icon="/assets/svg/1.svg" title="Modul Khusus" delay={0}>
            Seluruh materi yang dipelajari dibuat khusus oleh tim kami sesuai
            silabus yang sesuai.
          </MengapaItem>
          <MengapaItem
            icon="/assets/svg/2.svg"
            title="Mentor Profesional"
            delay={1}
          >
            Mentor di Generasi Ilmiah memiliki banyak prestasi dan pengalaman
            dalam bidangnya.
          </MengapaItem>
          <MengapaItem
            icon="/assets/svg/4.svg"
            title="Online & Offline"
            delay={2}
          >
            Menawarkan tidak hanya kelas online namun juga melakukan pengajaran
            secara offline.
          </MengapaItem>
          <MengapaItem
            icon="/assets/svg/3.svg"
            title="Garansi Output"
            delay={3}
          >
            Bimbingan submit hasil tulisan jika gagal dalam lomba sebelumnya
            maupun publikasi tidak diterima
          </MengapaItem>
        </div>
      </div>
    </section>
  );
}

export default Mengapa;
