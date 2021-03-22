import React from "react";
import Link from "next/link";
import ClassItem from "../components/ClassItem";
import kelas from "../kelas.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../auth";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function cart(props) {
  const db = firebase.firestore();
  const { user } = useAuth();

  const tempCartItem = [101];

  const tempCartObj = tempCartItem.map((item) => kelas.classes[item]);

  function handleOrder() {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    // TODO: Add additional info(timestamp, userInfo)
    const now = String(new Date().getTime());

    db.collection("orders")
      .doc(now)
      .set({ items: cartItems })
      .then(() => {
        db.collection("users")
          .doc(user.uid)
          .collection("history")
          .doc("orderHistory")
          .get()
          .then((data) => {
            const userData = data.data();
            console.log(userData);

            cartItems.forEach((el) => {
              userData.data.unshift(el);
            });

            console.log(userData);

            db.collection("users")
              .doc(user.uid)
              .collection("history")
              .doc("orderHistory")
              .update({ data: userData.data })
              .then(() => {
                toast("Yeay");
              })
              .catch((err) => {
                console.log(err.message);
                toast.error(err.message, {
                  position: "bottom-center",
                });
              });
          });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message, {
          position: "bottom-center",
        });
      });
  }

  return (
    <>
      {user ? (
        <div className="md:container md:mx-auto">
          <h3>Keranjang</h3>
          <ClassItem title="Business Plan" img="/assets/img/header.jpg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            bibendum nisl risus.
          </ClassItem>

          <div
            className="rounded-xl px-6 py-1.5 h-full w-36 mt-4 theme-bg text-white font-bold flex justify-center items-center"
            style={{ boxSizing: "border-box" }}
            onClick={handleOrder}
          >
            <p>Buat Order</p>
          </div>

          <div
            className="rounded-xl px-6 py-1.5 h-full w-36 mt-4 theme-bg text-white font-bold flex justify-center items-center"
            style={{ boxSizing: "border-box" }}
            onClick={() => {
              localStorage.setItem("cart", JSON.stringify(tempCartObj));
            }}
          >
            <p>make localhost</p>
          </div>
          <div
            className="rounded-xl px-6 py-1.5 h-full w-36 mt-4 theme-bg text-white font-bold flex justify-center items-center"
            style={{ boxSizing: "border-box" }}
            onClick={() => {
              localStorage.removeItem("cart");
            }}
          >
            <p>delete localhost</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default cart;
