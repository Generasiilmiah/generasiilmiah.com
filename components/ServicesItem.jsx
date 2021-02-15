function ServicesItem(props) {
  return (
    <div
      className="cover-img cover-img-overlay h-64 md:h-80 shadow-lg rounded-xl p-6 mb-4 flex items-end text-white"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="relative z-10">
        <h4 className="font-bold mb-2 text-xl">{props.title}</h4>
        <p className="text-sm md:text-base">{props.children}</p>
      </div>
    </div>
  );
}

export default ServicesItem;
