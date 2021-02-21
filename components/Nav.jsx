import React, { useState, useEffect } from "react";
import Link from "../NavLink";
// import { useAuth } from "../auth";
// import firebase from "firebase/app";
// import "firebase/firestore";

function Nav(props) {
  // const db = firebase.firestore();
  // const { user } = useAuth();
  const user = "";

  const [isOpen, setOpen] = useState(false);
  // const [userInfo, setUserInfo] = useState({});

  function toggleNav() {
    setOpen(!isOpen);
  }

  // async function getUserInfo(uid) {
  //   if (user) {
  //     await db
  //       .collection("users")
  //       .doc(uid)
  //       .get()
  //       .then((userData) => {
  //         if (userData.data()) {
  //           const fetch = userData.data();
  //           setUserInfo(fetch);
  //           console.log(userInfo);
  //         }
  //       });
  //   }
  // }

  // useEffect(() => {
  //   getUserInfo(user.uid);
  // }, []);

  return (
    <nav className="px-6 h-20 flex justify-between items-center md:container md:mx-auto z-20">
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
        <Link href="/pengguna">
          <a className="hidden md:block">
            <div
              className="rounded-xl px-6 py-1.5 h-full mr-4 theme-bg text-white font-bold flex justify-center items-center"
              style={{ boxSizing: "border-box" }}
            >
              <p>{user.uid}</p>
            </div>
          </a>
        </Link>
      ) : (
        <Link href="/login">
          <a className="hidden md:block">
            <div
              className="rounded-xl px-6 py-1.5 h-full mr-4 theme-bg text-white font-bold flex justify-center items-center"
              style={{ boxSizing: "border-box" }}
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
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
