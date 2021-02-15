import React from "react";

function SubpageHeader(props) {
  return (
    <div className="md:grid about-grid px-6 about-header md:mt-8">
      <h2 className="serif-heading text-3xl mb-8 mt-4 md:pr-8">Tentang Kami</h2>
      <div
        className="cover-img subpage-img"
        style={{ backgroundImage: `url('${props.bgImg}')` }}
      ></div>
    </div>
  );
}

export default SubpageHeader;
