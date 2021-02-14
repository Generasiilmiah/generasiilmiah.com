function BottomCta(props) {
  return (
    <section className="rounded-lg h-52 bg-gray-400 mx-6 my-10 flex flex-col items-center justify-center text-center md:container md:mx-auto">
      <h2 className="serif-heading text-2xl text-white mb-8">
        Beli Kelas Sekarang!
      </h2>

      <div
        className="rounded-xl w-24 h-9 bg-yellow-500 text-white font-bold flex items-center justify-center"
        style={{ boxSizing: "border-box" }}
      >
        <p>Masuk</p>
      </div>
    </section>
  );
}

export default BottomCta;
