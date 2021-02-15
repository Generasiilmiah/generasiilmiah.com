import React from "react";
import Link from "../NavLink";

function Nav(props) {
  return (
    <nav className="px-6 h-20 flex justify-between items-center md:container md:mx-auto">
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Logo Generasi Ilmiah" className="h-12" />
        </a>
      </Link>

      <ul className="hidden md:block md:flex md:gap-4 lg:gap-12">
        <li>
          <Link activeClassName="nav-active" href="/">
            <a className="text-gray-500">Beranda</a>
          </Link>
        </li>
        <li>
          <Link activeClassName="nav-active" href="/kelas">
            <a className="text-gray-500">Kelas</a>
          </Link>
        </li>
        <li>
          <Link activeClassName="nav-active" href="/about-us">
            <a className="text-gray-500">Tentang Kami</a>
          </Link>
        </li>
        <li>
          <Link activeClassName="nav-active" href="/testimonial">
            <a className="text-gray-500">Testimonial</a>
          </Link>
        </li>
        <li>
          <Link activeClassName="nav-active" href="/blog">
            <a className="text-gray-500">Blog</a>
          </Link>
        </li>
      </ul>

      <Link href="/kelas">
        <a className="block">
          <div
            className="rounded-xl px-6 py-1.5 h-full mr-4 theme-bg text-white font-bold flex justify-center items-center"
            style={{ boxSizing: "border-box" }}
          >
            <p>Masuk</p>
          </div>
        </a>
      </Link>

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
