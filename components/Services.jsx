import HomeSectionHeader from "./HomeSectionHeader";
import ServicesItem from "./ServicesItem";

function Services(props) {
  return (
    <section className="px-6 md:container md:mx-auto md:mb-14">
      <HomeSectionHeader title="Apa yang kami tawarkan?" isCenter="centered" />

      <div className="md:flex md:gap-8 md:mt-10">
        <ServicesItem title="Kelas Online" img="/assets/img/svc-1.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum nisl risus.
        </ServicesItem>

        <ServicesItem title="Kelas Online" img="/assets/img/svc-2.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum nisl risus.
        </ServicesItem>

        <ServicesItem title="Kelas Online" img="/assets/img/svc-3.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum nisl risus.
        </ServicesItem>

        <ServicesItem title="Kelas Online" img="/assets/img/svc-4.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          bibendum nisl risus.
        </ServicesItem>
      </div>
    </section>
  );
}

export default Services;
