import Link from "next/link";
import { useState } from "react";
import ClassItem from "./ClassItem";
import HomeSectionHeader from "./HomeSectionHeader";

function HomeClass(props) {
  const [category, setCategory] = useState(0);

  function setClassCat(cat) {
    setCategory(cat);
  }

  function classOutput() {
    switch (category) {
      case 0:
        return (
          <>
            <ClassItem title="Public Speaking" img="/assets/img/btm-cta.jpg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum nisl risus.
            </ClassItem>
            <ClassItem title="Public Speaking" img="/assets/img/btm-cta.jpg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum nisl risus.
            </ClassItem>
            <ClassItem title="Public Speaking" img="/assets/img/btm-cta.jpg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum nisl risus.
            </ClassItem>
          </>
        );

      case 1:
        return (
          <>
            <ClassItem title="Business Plan" img="/assets/img/header.jpg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum nisl risus.
            </ClassItem>
            <ClassItem title="Business Plan" img="/assets/img/header.jpg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum nisl risus.
            </ClassItem>
            <ClassItem title="Business Plan" img="/assets/img/header.jpg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              bibendum nisl risus.
            </ClassItem>
          </>
        );

      default:
        break;
    }
  }

  return (
    <section className="px-6 md:flex md:container md:mx-auto">
      <div className="md:mr-6">
        <HomeSectionHeader title="Kelas Online" isCenter="hybrid" />

        <p>
          Di Generasi Ilmiah, kelas online dibagi menjadi kelas penelitian dan
          kelas penalaran
        </p>

        <div className="flex justify-around items-center mt-8 mb-4 w-4/5 mx-auto border-b border-gray-200 pb-4">
          <p
            className={`cursor-pointer ${
              category === 0 ? "class-active" : "class-deselected"
            }`}
            onClick={() => setClassCat(0)}
          >
            Penelitian
          </p>
          <p
            className={`cursor-pointer ${
              category === 1 ? "class-active" : "class-deselected"
            }`}
            onClick={() => setClassCat(1)}
          >
            Penalaran
          </p>
        </div>
      </div>

      <div className="">
        <div className="md:grid md:grid-cols-3 md:gap-6">{classOutput()}</div>

        <Link href="/kelas">
          <a className="block w-40 text-center text-sm mx-auto mb-12 mt-8 py-2 px-6 rounded-full border-2 border-gray-700 font-bold">
            Lebih banyak
          </a>
        </Link>
      </div>
    </section>
  );
}

export default HomeClass;
