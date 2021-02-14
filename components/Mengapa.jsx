import HomeSectionHeader from "./HomeSectionHeader";
import MengapaItem from "./MengapaItem";

function Mengapa(props) {
  return (
    <section className="px-6 pb-10 pt-2 mt-8 backdrop">
      <div className="md:flex md:container md:mx-auto">
        <div className=" mb-8 md:mb-0 md:mr-8">
          <HomeSectionHeader title="Mengapa Generasi Ilmiah?" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            bibendum nisl risus, ac rhoncus erat mattis vitae. Mauris varius
            purus non ornare facilisis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MengapaItem></MengapaItem>
          <MengapaItem></MengapaItem>
          <MengapaItem></MengapaItem>
          <MengapaItem></MengapaItem>
        </div>
      </div>
    </section>
  );
}

export default Mengapa;
