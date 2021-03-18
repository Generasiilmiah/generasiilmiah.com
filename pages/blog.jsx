import React from "react";
import firebase from "firebase";
import BlogHighlight from "../components/BlogHighlight";
import BlogItem from "../components/BlogItem";
import Head from "next/head";

function blog(props) {
  const { postsData } = props;

  const postItem = postsData.map((post, index) => {
    if (index === 0) {
      return;
    }

    return (
      <BlogItem
        path={`/blog/${post.path}`}
        imgUrl={post.imgUrl}
        category={post.category}
        title={post.title}
        publishTime={post.publishTime}
        excerpt={post.excerpt}
        key={index}
      />
    );
  });
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

      <div className="px-6 pt-5 md:container md:mx-auto">
        <p className="mx-6 font-bold mb-6 text-xl serif-heading">Terbaru</p>
        <BlogHighlight
          path={`/blog/${postsData[0].path}`}
          imgUrl={postsData[0].imgUrl}
          category={postsData[0].category}
          title={postsData[0].title}
          publishTime={postsData[0].publishTime}
          excerpt={postsData[0].excerpt}
        />

        <p className="mx-6 mt-10 font-bold mb-6 text-xl serif-heading text-center">
          Lebih banyak
        </p>
        <div className="grid md:grid-cols-3 gap-8 mx-6 mb-8 mt-4 mb-16">
          {postItem}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBRXpXtZxo5VnogmuJ-uJANAwYQ6E1E9Y8",
    authDomain: "generasi-ilmiah-web.firebaseapp.com",
    databaseURL: "https://generasi-ilmiah-web-default-rtdb.firebaseio.com/",
    projectId: "generasi-ilmiah-web",
    storageBucket: "generasi-ilmiah-web.appspot.com",
    messagingSenderId: "233255754923",
    appId: "1:233255754923:web:56ff5020c3baae27f4abee",
    measurementId: "G-SWSCZYPDR2",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  const db = firebase.firestore();

  const fetch = await db
    .collection("blog")
    .where("isPublished", "==", true)
    .orderBy("publishTime", "desc")
    .get();
  const postsData = fetch.docs.map((doc) => doc.data());

  return {
    props: { postsData },
  };
}

export default blog;
