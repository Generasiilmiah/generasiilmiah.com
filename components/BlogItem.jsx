import React from "react";
function BlogItem(props) {
  return (
    <div className="mb-8">
      <img
        src="/assets/img/btm-cta.jpg"
        alt=""
        className="img-obj h-44 w-full rounded-lg md:h-64"
      />
      <div className="md:mt-4">
        <h3 className="font-bold text-xl mt-4 md:mt-0">
          Lorem ipsum dolor sit amet
        </h3>
        <small className="block mb-2 md:mb-3">31 Januari 2021 - 17:51</small>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          interdum tincidunt nisl, id convallis velit tristique hendrerit. Duis
          maximus ultrices neque,.
        </p>
      </div>
    </div>
  );
}

export default BlogItem;
