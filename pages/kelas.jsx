import React from "react";
import ClassItem from "../components/ClassItem";

import { useAuth } from "../auth";
import classIndex from "../kelas.json";

function Kelas(props) {
  const { user } = useAuth();

  return (
    <article className="px-6 md:container md:mx-auto">
      <h2 className="serif-heading text-xl md:text-2xl text-center my-8">
        Kelas Generasi Ilmiah
      </h2>
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
              >
                {props.classes[item].shortDesc}
              </ClassItem>
            );
          })}
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
