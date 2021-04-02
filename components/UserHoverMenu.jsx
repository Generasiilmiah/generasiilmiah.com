import Link from "next/link";
import React from "react";
import firebase from "firebase/app";

function UserHoverMenu(props) {
  return (
    <div className="user-hover-menu absolute right-0 top-16 py-4 px-5 bg-white rounded-lg shadow-xl ">
      <div className="bg-white rounded-lg shadow-lg flex items-center align-center py-3 px-4">
        <div className="rounded-full h-10 w-10 bg-gray-500 mr-6 flex items-center justify-center">
          <p className="text-white font-bold">AR</p>
        </div>
        <h3 className=" font-bold">Adit Raharditya</h3>
      </div>

      <div className="">
        <Link href="/kelasku">
          <a className="bg-white hover:bg-red-200 transition duration-150 ease-in-out">
            <div className="flex items-center justify-between my-4">
              <p>Kelasku</p>
              <img
                src="/assets/svg/dropdown.svg"
                alt=""
                className="accordion-dropdown"
                style={{ transform: "rotate(90deg)" }}
              />
            </div>
          </a>
        </Link>
        <Link href="/cart">
          <a>
            <div className="flex items-center justify-between my-4">
              <p>Keranjang</p>
              <img
                src="/assets/svg/dropdown.svg"
                alt=""
                className="accordion-dropdown"
                style={{ transform: "rotate(90deg)" }}
              />
            </div>
          </a>
        </Link>
        <Link href="/history">
          <a>
            <div className="flex items-center justify-between my-4">
              <p>Riwayat</p>
              <img
                src="/assets/svg/dropdown.svg"
                alt=""
                className="accordion-dropdown"
                style={{ transform: "rotate(90deg)" }}
              />
            </div>
          </a>
        </Link>
        <Link href="/pengaturan">
          <a>
            <div className="flex items-center justify-between my-4">
              <p>Pengaturan</p>
              <img
                src="/assets/svg/dropdown.svg"
                alt=""
                className="accordion-dropdown"
                style={{ transform: "rotate(90deg)" }}
              />
            </div>
          </a>
        </Link>
      </div>

      <div className="text-center py-2">
        <p
          className="font-bold text-red-600"
          onClick={async () => {
            await firebase.auth().signOut();
            window.location.href = "/";
          }}
        >
          Logout
        </p>
      </div>
    </div>
  );
}

export default UserHoverMenu;
