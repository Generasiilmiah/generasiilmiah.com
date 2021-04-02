import React, { useState, useEffect } from "react";
import Link from "../NavLink";
import { useAuth } from "../auth";
import * as gtag from "../lib/gtag";
import UserHoverMenu from "./UserHoverMenu";

export default function Nav(props) {
  const { user } = useAuth();

  const [isOpen, setOpen] = useState(false);

  function toggleNav() {
    setOpen(!isOpen);
  }

  function registerEvent() {
    // gtag.event({
    //   action: "login_clicked",
    //   category: "Auth",
    // });
  }

  return (
    <nav className="">
      <div className="px-6 h-20 flex justify-between items-center md:container md:mx-auto relative z-20">
        <Link href="/">
          <a>
            <img
              src="/logo.svg"
              alt="Logo Generasi Ilmiah"
              className="nav-logo h-12"
            />
          </a>
        </Link>

        <ul
          className={`md:block md:flex md:gap-4 lg:gap-12 ${
            isOpen ? "nav-mobile-active" : ""
          }`}
        >
          <li>
            <Link activeClassName="nav-active" href="/">
              <a className="text-gray-500" onClick={toggleNav}>
                Beranda
              </a>
            </Link>
          </li>
          <li>
            <Link activeClassName="nav-active" href="/kelas">
              <a className="text-gray-500" onClick={toggleNav}>
                Kelas
              </a>
            </Link>
          </li>
          <li>
            <Link activeClassName="nav-active" href="/about-us">
              <a className="text-gray-500" onClick={toggleNav}>
                Tentang Kami
              </a>
            </Link>
          </li>
          <li>
            <Link activeClassName="nav-active" href="/testimonial">
              <a className="text-gray-500" onClick={toggleNav}>
                Testimonial
              </a>
            </Link>
          </li>
          <li>
            <Link activeClassName="nav-active" href="/blog">
              <a className="text-gray-500" onClick={toggleNav}>
                Blog
              </a>
            </Link>
          </li>
        </ul>

        {user ? (
          <div className="user-hover-trigger h-full flex items-center justify-center">
            <div
              className="rounded-xl px-6 py-1.5 theme-bg text-white font-bold flex justify-center items-center"
              style={{ boxSizing: "border-box" }}
            >
              <p>Menu</p>
              <UserHoverMenu />
            </div>
          </div>
        ) : (
          <Link href="/login">
            <a className="hidden md:block">
              <div
                className="rounded-xl px-6 py-1.5 h-full theme-bg text-white font-bold flex justify-center items-center hover:bg-red-200 hover:text-red-500 transition duration-150 ease-in-out"
                style={{ boxSizing: "border-box" }}
                onClick={registerEvent()}
              >
                <p>Masuk</p>
              </div>
            </a>
          </Link>
        )}

        <div
          className={`nav-icon flex flex-col gap-1 md:hidden ${
            isOpen ? "toggle" : ""
          }`}
          onClick={toggleNav}
        >
          <div className="nav-line line-1"></div>
          <div className="nav-line line-2"></div>
          <div className="nav-line line-3"></div>
        </div>
      </div>
    </nav>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { hi: "hello" },
  };
}
