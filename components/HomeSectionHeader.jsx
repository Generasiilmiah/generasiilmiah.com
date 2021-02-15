function HomeSectionHeader(props) {
  return (
    <h3
      className={`serif-heading text-xl mt-8 mb-6 md:text-2xl ${
        props.isCenter ? "text-center" : "text-left"
      }`}
    >
      {props.title}
    </h3>
  );
}

export default HomeSectionHeader;
