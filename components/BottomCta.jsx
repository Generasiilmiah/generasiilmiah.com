function BottomCta(props) {
  return (
    <section
      className="cover-img cover-img-overlay shadow-lg rounded-xl h-52 md:h-64 mx-6 my-10 flex flex-col items-center justify-center text-center md:container md:mx-auto"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <h2 className="serif-heading text-2xl md:text-3xl text-white mb-8 relative z-10">
        Pesan Kelas Sekarang!
      </h2>

      <div
        className="theme-bg rounded-xl w-24 h-9 text-white font-bold flex items-center justify-center relative z-10"
        style={{ boxSizing: "border-box" }}
      >
        <p>Masuk</p>
      </div>
    </section>
  );
}

export default BottomCta;
