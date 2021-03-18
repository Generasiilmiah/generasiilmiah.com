import React from "react";
import Link from "next/link";

function BlogItem(props) {
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
        <div className="h-full shadow-lg rounded-lg overlay-hidden hover:shadow-xl transition duration-150 ease-in-out class-selection">
          <div
            className="cover-img rounded-none h-48 md:h-52 w-full rounded-tl-lg rounded-tr-lg"
            style={{
              backgroundImage: `url(${props.imgUrl})`,
            }}
          ></div>
          <div className="pt-4 pb-8 px-6">
            <p className="mb-4 underline">{props.category}</p>
            <h3 className="text-xl font-bold">{props.title}</h3>
            <small>{`${date.getDate()} ${
              months[date.getMonth()]
            } ${date.getFullYear()} - ${timeStr}`}</small>

            <p className="mt-4">{`${props.excerpt.substr(0, 100)}...`}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default BlogItem;
