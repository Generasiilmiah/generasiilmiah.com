function MengapaItem(props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={props.delay * 150}
      data-aos-easing="ease-in-out"
    >
      <div className="theme-bg rounded-full p-2.5 md:p-4 flex items-center justify-center h-10 w-10 md:h-14 md:w-14">
        <img src={props.icon} alt="Icon Dekoratif" className="w-full" />
      </div>
      <h4 className="font-bold text-lg mt-2">{props.title}</h4>
      <p className="text-sm">{props.children}</p>
    </div>
  );
}

export default MengapaItem;
