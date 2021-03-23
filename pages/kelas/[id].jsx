import React, { useContext } from "react";
import Link from "next/link";
import classIndex from "../../kelas.json";
import { useRouter } from "next/router";
import Collapsible from "react-collapsible";
import AccordionTitle from "../../components/AccordionTitle";
import AccordionContent from "../../components/AccordionContent";
import NotFound from "../404";

import { CartContext } from "../../CartContext";
import Head from "next/head";

function ClassDetail(props) {
  const cart = useContext(CartContext);
  console.log(cart);

  function generateMsg(kelas, paket) {
    const targetPhone = `6281370369566`;
    const whatsappMsg = `Halo kak! Aku mau pesan Kelas ${kelas} paket ${paket} nih!`;

    const link = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${whatsappMsg
      .split(" ")
      .join("%20")}`;

    return link;
  }

  const router = useRouter();
  const classId = router.query.id;

  function handleOrder(id, pkg) {
    const currentCart = cart;

    if (currentCart.items.filter((item) => item.id === classId).length !== 0) {
      console.log("Item already in cart");
      return;
    }

    currentCart.items.unshift({
      id,
      pkg,
    });

    props.setCart(currentCart);
  }

  return (
    <div className="">
      {props.classes[classId] ? (
        <>
          <Head>
            <meta
              name="description"
              content={props.classes[classId].shortDesc}
            />
            <meta
              property="og:url"
              content={`https://generasiilmiah.com/kelas/${classId}`}
            />
            <meta
              property="og:image"
              content={`https://generasiilmiah.com${props.classes[classId].thumbnail}`}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:description"
              content={props.classes[classId].shortDesc}
            />
            <meta
              property="og:title"
              content={`Kelas ${props.classes[classId].name} - Generasi Ilmiah`}
            />
            <title>{`Kelas ${props.classes[classId].name} - Generasi Ilmiah`}</title>
          </Head>

          <article className="px-6 min-h-screen md:container md:mx-auto md:mt-8">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/2 text-center">
                <img
                  src={props.classes[classId].thumbnail}
                  alt=""
                  className="img-obj w-full h-84 rounded-xl my-8 md:my-0 max-w-2xl"
                />
              </div>

              <div className="md:w-1/2 md:pr-10">
                <div className="breadcrumb font-bold text-sm">
                  <Link href="#">
                    <a>{props.classes[classId].category}</a>
                  </Link>
                  <span>{` > `}</span>
                  <Link href="#">
                    <a>{props.classes[classId].name}</a>
                  </Link>
                </div>
                <h2 className="serif-heading text-2xl mb-4">
                  {props.classes[classId].name}
                </h2>
                <p>{props.classes[classId].shortDesc}</p>

                <div className="mt-8 mb-14 md:mb-0 md:mt-6">
                  <h3 className="text-center font-bold text-lg mb-3">
                    Pesan kelas
                  </h3>
                  <div className="flex justify-around items-center">
                    <div
                      className="w-2/5 border-2 border-gray-500 text-center rounded-lg shadow-lg py-3 transition duration-150 ease-in-out class-selection hover:shadow-xl cursor-pointer"
                      onClick={() => handleOrder(classId, 0)}
                    >
                      <h2>BASIC</h2>
                      <small className="line-through">
                        Rp {props.classes[classId].priceBasicBefore}
                      </small>
                      <h3 className="font-bold text-lg -mt-1">
                        Rp {props.classes[classId].priceBasic}
                      </h3>
                    </div>

                    <div
                      className="w-2/5 theme-bg text-white text-center rounded-lg shadow-lg py-3 transition duration-150 ease-in-out class-selection hover:shadow-xl cursor-pointer"
                      onClick={() => handleOrder(classId, 1)}
                    >
                      <h2>ULTIMATE</h2>
                      <small className="line-through">
                        Rp {props.classes[classId].priceUltBefore}
                      </small>
                      <h3 className="font-bold text-lg -mt-1">
                        Rp {props.classes[classId].priceUlt}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop md:w-3/5 mx-auto md:mx-0 py-4 px-6 rounded-lg mt-10">
              <div className="">
                <h4 className="font-bold mb-2 text-lg">Deskripsi</h4>
                <p>{props.classes[classId].desc}</p>

                <h4 className="font-bold mb-2 mt-6 text-lg">Fasilitas</h4>
                <ul>
                  {props.classes[classId].facility.map((item, idx) => (
                    <li key={idx}>{`- ${item}`}</li>
                  ))}
                </ul>

                <h4 className="font-bold mb-2 mt-6 text-lg">Kurikulum Kelas</h4>
                <div className="border border-gray-300 shadow-lg bg-white rounded-lg overflow-hidden mb-6">
                  {props.classes[classId].curriculum.map(
                    (curriculumItem, index) => (
                      <Collapsible
                        trigger={
                          <AccordionTitle title={curriculumItem.title} />
                        }
                        triggerStyle={{ cursor: "pointer" }}
                        transitionTime={200}
                        easing="ease-in-out"
                      >
                        <AccordionContent items={curriculumItem.subItem} />
                      </Collapsible>
                    )
                  )}
                </div>
              </div>
            </div>
          </article>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { ...classIndex },
  };
}

ClassDetail.propTypes = {};

export default ClassDetail;
