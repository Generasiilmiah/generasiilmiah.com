import Link from "next/link";

function BottomCta(props) {
  return (
    <section
      className="cover-img cover-img-overlay shadow-lg rounded-xl h-52 md:h-64 mx-6 my-10 flex flex-col items-center justify-center text-center md:container md:mx-auto"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <h2
        className="serif-heading text-2xl md:text-3xl text-white mb-8 relative z-10"
        data-aos="fade-in"
        data-aos-easing="ease-in-out"
      >
        Pesan Kelas Sekarang!
      </h2>

      <Link href="/kelas">
        <a>
          <div
            className="theme-bg rounded-xl px-6 py-2 text-white font-bold flex items-center justify-center relative z-10"
            style={{ boxSizing: "border-box" }}
            data-aos="fade-in"
            data-aos-delay={150}
            data-aos-easing="ease-in-out"
          >
            <p>Lihat Kelas</p>
          </div>
        </a>
      </Link>
    </section>
  );
}

export default BottomCta;
