import React from "react";
import Link from "next/link";

function BlogHighlight(props) {
  const date = new Date(props.publishTime);
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
  const timeStr = `${date.getHours()}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  }`;

  return (
    <Link href={props.path}>
      <a>
        <div className="blog-newest flex flex-col md:flex-row group mx-6 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-150 ease-in-out class-selection">
          <div
            className="cover-img rounded-none h-48 md:h-72 w-full md:w-2/5 2xl:h-80"
            style={{
              backgroundImage: `url(${props.imgUrl})`,
            }}
          ></div>
          <div className="w-full md:w-3/5 px-8 pt-4 pb-8">
            <p className="mb-4 underline">{props.category}</p>
            <h3 className="text-2xl font-bold pr-4">{props.title}</h3>
            <small>{`${date.getDate()} ${
              months[date.getMonth()]
            } ${date.getFullYear()} - ${timeStr}`}</small>
            <p className="overflow-ellipsis overflow-hidden mt-4">
              {`${props.excerpt.substr(0, 100)}...`}
            </p>
            <div
              className="hidden md:block relative overflow-hidden py-1 w-max mt-4 2xl:mt-14 font-bold cursor-pointer transition duration-150 ease-in-out group-hover:text-red-600"
              style={{ boxSizing: "border-box" }}
            >
              <div className="blog-underline absolute w-full bottom-0 h-1 bg-red-600 transition duration-150 ease-in-out"></div>
              <p>Baca lebih lanjut</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default BlogHighlight;
