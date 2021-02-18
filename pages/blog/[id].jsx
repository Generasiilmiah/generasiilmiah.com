import React from "react";

function Article(props) {
  return (
    <article className="px-6 py-8 md:container md:mx-auto">
      <div className="md:w-3/5">
        <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet</h1>
        <small className="block mb-6">31 Januari 2021 - 17:51</small>
        <img
          src="/assets/img/btm-cta.jpg"
          alt=""
          className="img-obj w-full h-48 mb-6 rounded-lg md:h-96"
        />

        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          vel officia quibusdam ad quidem nobis fuga dolores incidunt assumenda
          sint magnam impedit fugit enim ut amet totam, dolor minus perferendis,
          fugiat nesciunt adipisci natus aperiam quae. Aliquam voluptatum
          possimus sit minima saepe? Iure perspiciatis quo nam magnam pariatur
          ea? Voluptates.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          vel officia quibusdam ad quidem nobis fuga dolores incidunt assumenda
          sint magnam impedit fugit enim ut amet totam, dolor minus perferendis,
          fugiat nesciunt adipisci natus aperiam quae. Aliquam voluptatum
          possimus sit minima saepe? Iure perspiciatis quo nam magnam pariatur
          ea? Voluptates.
        </p>
      </div>
    </article>
  );
}

export default Article;
