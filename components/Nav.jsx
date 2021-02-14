import Link from "next/link";
import React from "react";
// import { ReactComponent as Logo } from "/logo.svg";

function Nav(props) {
  return (
    <nav className="px-6 h-20 flex justify-between items-center md:container md:mx-auto">
      <img src="/logo.svg" alt="Logo Generasi Ilmiah" className="h-12" />

      <ul className="hidden md:block md:flex md:gap-4 lg:gap-12">
        <li>
          <Link href="/">
            <a className="font-bold">Beranda</a>
          </Link>
        </li>
        <li>
          <Link href="/kelas">
            <a className="text-gray-500">Kelas</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a className="text-gray-500">Tentang Kami</a>
          </Link>
        </li>
        <li>
          <Link href="/testimonial">
            <a className="text-gray-500">Testimonial</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="text-gray-500">Blog</a>
          </Link>
        </li>
      </ul>

      <div
        className="rounded-xl ring-2 ring-gray-600 w-20 h-9 flex justify-center items-center hidden md:flex"
        style={{ boxSizing: "border-box" }}
      >
        <p>Masuk</p>
      </div>

      <div className="flex flex-col gap-1 md:hidden">
        <div className="nav-icon"></div>
        <div className="nav-icon"></div>
        <div className="nav-icon"></div>
      </div>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
