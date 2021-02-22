function ServicesItem(props) {
  return (
    <div
      className="cover-img cover-img-overlay h-64 md:h-80 shadow-lg rounded-xl p-6 mb-4 flex items-end text-white md:flex-1"
      style={{ backgroundImage: `url(${props.img})` }}
      data-aos="fade-up"
      data-aos-delay={props.delay * 150}
      data-aos-easing="ease-in-out"
    >
      <div className="relative z-10">
        <h4 className="font-bold mb-2 text-xl">{props.title}</h4>
        <p className="text-sm md:text-base">{props.children}</p>
      </div>
    </div>
  );
}

export default ServicesItem;
