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
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            bibendum nisl risus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Fusce bibendum nisl risus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-9 md:mb-4 md:w-1/2 md:ml-4">
          <MengapaItem icon="/assets/svg/1.svg" title="Modul Khusus">
            Seluruh materi di Generasi Ilmiah dibuat khusus dengan kurikulum
            kami.
          </MengapaItem>
          <MengapaItem icon="/assets/svg/2.svg" title="Mentor Profesional">
            Mentor di Generasi Ilmiah memiliki banyak prestasi dan pengalaman
            dalam bidangnya.
          </MengapaItem>
          <MengapaItem icon="/assets/svg/4.svg" title="Online & Offline">
            Tidak hanya kelan online, kami juga melakukan pengajaran secara
            offline.
          </MengapaItem>
          <MengapaItem icon="/assets/svg/3.svg" title="Garansi Output">
            Output dapat berupa diterima dalam lomba maupun diterima publikasi.
          </MengapaItem>
        </div>
      </div>
    </section>
  );
}

export default Mengapa;
