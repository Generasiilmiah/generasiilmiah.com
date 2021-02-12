import React from "react";
import PropTypes from "prop-types";

function ComingSoon(props) {
  return (
    <div className="coming-soon-outer px-6 py-8">
      <div
        className="coming-soon-inner cover-img h-full flex items-center justify-center"
        style={{ backgroundImage: `url('${props.bgImg}')` }}
      >
        <h2 className="text-center text-white serif-heading text-4xl relative z-10">
          Coming
          <br />
          Soon
        </h2>
      </div>
    </div>
  );
}

ComingSoon.propTypes = {};

export default ComingSoon;
