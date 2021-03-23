import React, { useContext } from "react";
import Link from "next/link";
import ClassItem from "../components/ClassItem";
import CartItem from "../components/CartItem";
import kelas from "../kelas.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../auth";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { CartContext } from "../CartContext";

function cart(props) {
  const db = firebase.firestore();
  // const { user } = useAuth();
  const user = true;
  const cart = useContext(CartContext);
  console.log(cart);

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
        <div className="md:container md:mx-auto md:flex md:gap-6 px-6">
          <div className="md:w-4/6">
            <h3 className="font-bold text-2xl mb-6 mt-6">Keranjang</h3>
            <div className="flex flex-col gap-6">
              { cart ? cart.items.map((item, idx) => {
                const classData = kelas.classes[item.id]
                return <CartItem 
                  key={idx}
                  title={classData.name} 
                  price={item.pkg === 0 ? classData.priceBasic : classData.priceUlt} 
                  pkg={item.pkg === 0 ? "basic" : "ultimate"} 
                />

                }) : <p>Test</p>
              }
            </div>

            <div className="text-center mt-6">
              <h2 className="font-bold text-lg">Metode Pembayaran</h2>

              <div className="md:flex">
                <img src="/assets/svg/bank-bni.svg" alt="" className="block mx-auto my-6 h-10" />
                <img src="/assets/svg/bank-bri.svg" alt="" className="block mx-auto my-6 h-10" />
              </div>
            </div>
          </div>
          
          <div className="md:w-2/6 py-4 px-6 mt-6 mb-4 md:mt-0 md:mb-0 bg-white shadow-xl rounded-lg">
              <small className="text-defocused">TOTAL</small>
              <h3 className="font-bold text-2xl">Rp 120.000</h3>

              <div
                className="rounded-xl px-6 py-1.5 w-full mt-4 theme-bg text-white font-bold flex justify-center items-center cursor-pointer hover:bg-red-500 transition duration-150 ease-in-out"
                style={{ boxSizing: "border-box" }}
              >
                <p>Pembayaran</p>
              </div>
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
