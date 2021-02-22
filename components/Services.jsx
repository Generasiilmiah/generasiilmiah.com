import HomeSectionHeader from "./HomeSectionHeader";
import ServicesItem from "./ServicesItem";

function Services(props) {
  return (
    <section className="px-6 md:container md:mx-auto md:mb-14">
      <HomeSectionHeader title="Apa yang kami tawarkan?" isCenter="centered" />

      <div className="md:flex md:gap-8 md:mt-10">
        <ServicesItem
          title="Kelas Online"
          img="/assets/img/svc-1.webp"
          delay={0}
        >
          Berdasarkan silabus yang telah dibuat dan dilakukan secara virtual
          Meeting.
        </ServicesItem>

        <ServicesItem
          title="Pengajaran Offline "
          img="/assets/img/svc-2.webp"
          delay={1}
        >
          Pengajaran offline secara langsung di sekolah jenjang SD, SMP, dan
          SMA.
        </ServicesItem>

        <ServicesItem
          title="Garansi Lomba"
          img="/assets/img/svc-3.webp"
          delay={2}
        >
          Bimbingan submit hasil tulisan jika tidak menjadi finalis lomba /
          ditolak publikasi.
        </ServicesItem>

        <ServicesItem
          title="Kerjasama Partner"
          img="/assets/img/svc-4.webp"
          delay={3}
        >
          Mempermudah pendaftaran pada event lomba melalui Generasi Ilmiah.
        </ServicesItem>
      </div>
    </section>
  );
}

export default Services;
