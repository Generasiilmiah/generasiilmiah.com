import React, { useContext } from "react";
import Router from "next/router";
import Link from "next/link";
import ClassItem from "../components/ClassItem";
import CartItem from "../components/CartItem";
import kelas from "../kelas.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../auth";
import nookies from "nookies";
import { verifyIdToken } from "../firebaseAdmin";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { CartContext } from "../CartContext";

function cart(props) {
  const randomstring = require("randomstring");
  const db = firebase.firestore();
  // const { user } = useAuth();
  const user = true;
  const cart = useContext(CartContext);
  console.log(cart);

  function handleOrder() {
    let random = Math.floor(Math.random() * 600);

    console.log(random);
    const now = String(new Date().valueOf());

    const cartPush = {
      timePurchased: now,
      user: props.session?.uid,
      userEmail: props.session?.email,
      paymentStatus: 1,
      transactionId: `GI-${randomstring.generate(6)}`.toUpperCase(),
    };

    cartPush.items = cart.items.map((item) => {
      const itemContent = {
        thumbnail: kelas.classes[item.id].thumbnail,
        name: kelas.classes[item.id].name,
        category: kelas.classes[item.id].category,
      };

      console.log(itemContent);

      if (item.pkg === 0)
        itemContent.price = kelas.classes[item.id].priceBasic + random;
      if (item.pkg === 1)
        itemContent.price = kelas.classes[item.id].priceUlt + random;

      return itemContent;
    });

    // TODO: Add additional info(timestamp, userInfo)
    console.log(cartPush);
    console.log(props.session.uid);

    db.collection("orders")
      .doc(now)
      .set({ ...cartPush })
      .then(() => {
        db.collection("users")
          .doc(props.session.uid)
          .collection("purchaseHistory")
          .doc(now)
          .set({ ...cartPush })
          .then(() => {
            toast("Yeay");
            props.setCart({ items: [] });
            Router.push(`/riwayat/${cartPush.transactionId}`);
          })
          .catch((err) => {
            console.log(err.message);
            toast.error(err.message, {
              position: "bottom-center",
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

  function handlePkgChange(pkg, idx) {
    if (pkg === "basic") {
      const currentCart = cart;
      currentCart.items[idx].pkg = 0;
      props.setCart(currentCart);
      console.log(currentCart);
      return;
    }
    if (pkg === "ultimate") {
      const currentCart = cart;
      currentCart.items[idx].pkg = 1;
      props.setCart(currentCart);
      console.log(currentCart);
      return;
    }
  }

  return (
    <>
      {user ? (
        <div className="md:container md:mx-auto md:flex md:gap-6 px-6">
          <div className="md:w-4/6">
            <h3 className="font-bold text-2xl mb-6 mt-6">Keranjang</h3>
            <div className="flex flex-col gap-6">
              {cart ? (
                cart.items.map((item, idx) => {
                  const classData = kelas.classes[item.id];
                  return (
                    <CartItem
                      key={idx}
                      title={classData.name}
                      price={
                        item.pkg === 0
                          ? classData.priceBasic
                          : classData.priceUlt
                      }
                      pkg={item.pkg === 0 ? "basic" : "ultimate"}
                      handlePkgChange={handlePkgChange}
                    />
                  );
                })
              ) : (
                <p>Test</p>
              )}
            </div>

            <div className="text-center mt-6">
              <h2 className="font-bold text-lg">Metode Pembayaran</h2>

              <div className="md:flex">
                <img
                  src="/assets/svg/bank-bni.svg"
                  alt=""
                  className="block mx-auto my-6 h-10"
                />
                <img
                  src="/assets/svg/bank-bri.svg"
                  alt=""
                  className="block mx-auto my-6 h-10"
                />
              </div>
            </div>
          </div>

          <div className="md:w-2/6 py-4 px-6 mt-6 mb-4 md:mt-0 md:mb-0 bg-white shadow-xl rounded-lg">
            <small className="text-defocused">TOTAL</small>
            <h3 className="font-bold text-2xl">Rp 120.000</h3>

            <div
              className="rounded-xl px-6 py-1.5 w-full mt-4 theme-bg text-white font-bold flex justify-center items-center cursor-pointer hover:bg-red-500 transition duration-150 ease-in-out"
              style={{ boxSizing: "border-box" }}
              onClick={
                props.session ? handleOrder : () => Router.push("/login")
              }
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

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;

    return {
      props: {
        session: {
          uid,
          email,
        },
      },
    };
  } catch (err) {
    return { props: { session: {} } };
  }
}

export default cart;
