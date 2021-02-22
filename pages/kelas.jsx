import Head from "next/head";
import React from "react";
import ClassItem from "../components/ClassItem";

// import { useAuth } from "../auth";
import classIndex from "../kelas.json";

function Kelas(props) {
  // const { user } = useAuth();

  return (
    <article className="">
      <Head>
        <meta
          name="description"
          content="Generasi Ilmiah memiliki program kelas online yang diajarkan oleh mentor-mentor kami yang profesional."
        />
        <meta property="og:url" content="https://generasiilmiah.com/kelas" />
        <meta
          property="og:image"
          content="https://generasiilmiah.com/logo/icon512.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Generasi Ilmiah memiliki program kelas online yang diajarkan oleh mentor-mentor kami yang profesional."
        />
        <meta property="og:title" content="Kelas Online - Generasi Ilmiah" />
        <title>Kelas Online - Generasi Ilmiah</title>
      </Head>

      <div
        className="cover-img cover-img-overlay-square rounded-none h-56 md:h-72 text-white mb-8 flex items-center justify-center"
        style={{ backgroundImage: `url('/assets/img/kelas.webp')` }}
      >
        <h2 className="serif-heading text-xl text-3xl md:text-4xl text-center my-8 relative z-10">
          Kelas
          <br />
          Generasi Ilmiah
        </h2>
      </div>

      <div className="px-6 md:container md:mx-auto">
        <div className="">
          {/* <p className="font-bold mb-4">Penelitian</p> */}

          <div className="md:grid grid-cols-1 md:grid-cols-2 md:gap-6 md:w-4/5 md:mx-auto">
            {props.index.penelitian.map((item, idx) => {
              return (
                <ClassItem
                  key={idx}
                  title={props.classes[item].name}
                  img={props.classes[item].thumbnail}
                  id={item}
                  price={props.classes[item].priceBasic}
                  priceBefore={props.classes[item].priceBasicBefore}
                  delay={idx}
                >
                  {props.classes[item].shortDesc}
                </ClassItem>
              );
            })}
          </div>
        </div>
      </div>
      {/* 
      <div className="mt-8">
        <p className="font-bold mb-4">Penalaran</p>

        <div className="md:grid md:grid-cols-4 md:gap-6">
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
        </div>
      </div> */}
    </article>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { ...classIndex },
  };
}

export default Kelas;
