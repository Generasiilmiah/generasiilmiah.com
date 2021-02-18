import React from "react";

function BlogHighlight(props) {
  return (
    <div className="md:flex mb-8">
      <img
        src="/assets/img/btm-cta.jpg"
        alt=""
        className="img-obj h-44 w-full rounded-lg md:mr-6 md:h-80"
      />
      <div className="">
        <h3 className="font-bold text-xl mt-4 md:mt-0 md:text-2xl">
          Lorem ipsum dolor sit amet
        </h3>
        <small className="block mb-2 text-defocused">
          31 Januari 2021 - 17:51
        </small>
        <p className="md:w-3/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          interdum tincidunt nisl, id convallis velit tristique hendrerit. Duis
          maximus ultrices neque,.
        </p>
      </div>
    </div>
  );
}

export default BlogHighlight;
