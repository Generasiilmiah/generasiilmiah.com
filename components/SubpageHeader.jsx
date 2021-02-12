import React from "react";

function SubpageHeader(props) {
  return (
    <div className="md:flex px-6">
      <h2 className="serif-heading text-3xl mb-8 mt-4">Tentang Kami</h2>
      <div
        className="cover-img subpage-img"
        style={{ backgroundImage: `url('${props.bgImg}')` }}
      ></div>
    </div>
  );
}

export default SubpageHeader;
