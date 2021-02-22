import React from "react";
import PropTypes from "prop-types";
import BlogHighlight from "../components/BlogHighlight";
import BlogItem from "../components/BlogItem";
import ComingSoon from "../components/ComingSoon";
import Construction from "../components/Construction";
import Head from "next/head";
import BlogSingle from "../components/BlogSingle";

function blog(props) {
  return (
    <div className="">
      <Head>
        <meta
          name="description"
          content="Blog Generasi Ilmiah berisikan berbagai artikel menarik seputar dunia ilmiah, baik dari segi penelitian maupun penalaran."
        />
        <meta property="og:url" content="https://generasiilmiah.com/blog" />
        <meta
          property="og:image"
          content="https://generasiilmiah.com/logo/icon512.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Blog Generasi Ilmiah berisikan berbagai artikel menarik seputar dunia ilmiah, baik dari segi penelitian maupun penalaran."
        />
        <meta property="og:title" content="Blog - Generasi Ilmiah" />
        <title>Blog - Generasi Ilmiah</title>
      </Head>

      <div
        className="cover-img cover-img-overlay-square rounded-none h-56 md:h-72 text-white md:mb-8 flex items-center justify-center"
        style={{ backgroundImage: `url('/assets/img/blog.webp')` }}
      >
        <h2 className="serif-heading text-xl text-3xl md:text-4xl text-center my-8 relative z-10">
          Blog
          <br />
          Generasi Ilmiah
        </h2>
      </div>

      <div className="px-6 pt-8 md:container md:mx-auto">
        <BlogSingle />
      </div>
      {/* <BlogHighlight />

      <div className="md:grid md:grid-cols-2 md:gap-8">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div> */}
      {/* <Construction /> */}
    </div>
  );
}

blog.propTypes = {};

export default blog;
