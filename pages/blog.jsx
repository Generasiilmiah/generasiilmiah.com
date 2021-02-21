import React from "react";
import PropTypes from "prop-types";
import BlogHighlight from "../components/BlogHighlight";
import BlogItem from "../components/BlogItem";
import ComingSoon from "../components/ComingSoon";

function blog(props) {
  return (
    <div className="px-6 pt-8 md:container md:mx-auto">
      {/* <BlogHighlight />

      <div className="md:grid md:grid-cols-2 md:gap-8">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div> */}
      <ComingSoon bgImg="/assets/img/coming-soon.jpg" />
    </div>
  );
}

blog.propTypes = {};

export default blog;
