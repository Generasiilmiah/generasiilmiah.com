import React, { useState } from "react";
import Head from "next/head";
import NotFound from "../404";
import firebase from "firebase";

function Article(props) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const { postData } = props;

  let publishTime;
  let timeStr;
  let contentOutput;

  if (postData.length !== 0) {
    publishTime = new Date(postData[0].publishTime);

    timeStr = `${publishTime.getHours()}:${
      publishTime.getMinutes() < 10
        ? `0${publishTime.getMinutes()}`
        : publishTime.getMinutes()
    }`;

    contentOutput = postData[0].blocks.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p
              className="w-11/12 mx-auto mt-5"
              key={index + 10}
              dangerouslySetInnerHTML={{ __html: block.data.text }}
            />
          );

        case "list":
          if (block.data.style === "unordered") {
            const unordered = block.data.items.map((item, idx) => (
              <li
                key={idx + 200 * index}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ));
            return (
              <ul
                className="w-11/12 mx-auto pl-8 mt-4 list-disc"
                key={index + 100}
              >
                {unordered}
              </ul>
            );
          } else if (block.data.style === "ordered") {
            const ordered = block.data.items.map((item, idx) => (
              <li
                key={idx + 250 * index}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ));
            return (
              <ol
                className="w-11/12 mx-auto pl-8 mt-4 list-decimal"
                key={index - 100}
              >
                {ordered}
              </ol>
            );
          }

        case "image":
          const { withBackground, withBorder, stretched } = block.data;

          return (
            <>
              <div
                key={index - 50}
                className={`mt-6 rounded-lg overflow-hidden ${
                  withBorder ? "border border-gray-200 shadow-lg" : ""
                }  ${stretched ? "w-full" : "w-11/12 mx-auto"} ${
                  withBackground ? "bg-gray-300 py-4 text-center" : ""
                }`}
              >
                <img
                  src={block.data.file.url}
                  alt=""
                  className={`${
                    withBackground ? "w-1/2 block mx-auto" : "w-full"
                  }`}
                />
              </div>
              <small className="block text-center mx-auto text-gray-600 mt-4">
                {block.data.caption}
              </small>
            </>
          );

        default:
          return;
      }
    });
  }

  return (
    <>
      {postData.length !== 0 ? (
        <article className="blog-post md:container md:mx-auto px-6 py-4">
          <Head>
            <meta name="description" content={postData[0].excerpt} />
            <meta
              property="og:url"
              content={`https://generasiilmiah.com/blog/${postData[0].path}`}
            />
            <meta property="og:image" content={postData[0].imgUrl} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={postData[0].excerpt} />
            <meta
              property="og:title"
              content={`${postData[0].title} - Generasi Ilmiah`}
            />
            <title>{postData[0].title} - Generasi Ilmiah</title>
          </Head>

          <div className="md:w-3/5 ">
            <h3 className="font-bold text-2xl">{postData[0].title}</h3>
            <small className="block mb-6">{`${publishTime.getDate()} ${
              months[publishTime.getMonth()]
            } ${publishTime.getFullYear()} - ${timeStr}`}</small>
            <img
              src={postData[0].imgUrl}
              alt="Gambar thumbnail"
              className="w-full rounded-lg"
            />
            {contentOutput}
          </div>
        </article>
      ) : (
        <article className="px-6 py-8 md:container md:mx-auto">
          <NotFound />
        </article>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

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

  let colRef = db.collection("blog");
  colRef = colRef.where("path", "==", id);
  colRef = colRef.where("isPublished", "==", true);
  const fetch = await colRef.get();
  const postData = fetch.docs.map((doc) => doc.data());

  return {
    props: { postData },
  };
}

export default Article;
