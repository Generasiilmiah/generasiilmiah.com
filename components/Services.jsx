import HomeSectionHeader from "./HomeSectionHeader";
import ServicesItem from "./ServicesItem";

function Services(props) {
  return (
    <section className="px-6 md:container md:mx-auto">
      <HomeSectionHeader title="Apa yang kami tawarkan?" />

      <div className="md:flex md:gap-4 md:mt-10">
        <ServicesItem title="Kelas Online">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum nisl risus.
        </ServicesItem>

        <ServicesItem title="Kelas Online">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum nisl risus.
        </ServicesItem>

        <ServicesItem title="Kelas Online">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum nisl risus.
        </ServicesItem>

        <ServicesItem title="Kelas Online">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum nisl risus.
        </ServicesItem>
      </div>
    </section>
  );
}

export default Services;
