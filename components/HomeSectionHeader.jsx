function HomeSectionHeader(props) {
  switch (props.isCenter) {
    case "centered":
      return (
        <h3
          className={`serif-heading text-xl mt-8 mb-6 md:text-2xl text-center
          `}
          data-aos="fade-in"
        >
          {props.title}
        </h3>
      );

    case "left":
      return (
        <h3
          className={`serif-heading text-xl mt-8 mb-6 md:text-2xl text-left
          `}
          data-aos="fade-in"
        >
          {props.title}
        </h3>
      );

    case "hybrid":
      return (
        <h3
          className={`serif-heading text-xl mt-8 mb-6 md:text-2xl home-heading-hybrid
          `}
          data-aos="fade-in"
        >
          {props.title}
        </h3>
      );

    default:
      break;
  }
}

export default HomeSectionHeader;
