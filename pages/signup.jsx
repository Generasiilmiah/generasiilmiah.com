import React, { useState } from "react";
import Link from "next/link";
import SignupForm from "../components/SignupForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Construction from "../components/Construction";

// import firebaseClient from "../firebaseClient";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

function signup(props) {
  // firebaseClient();
  // const db = firebase.firestore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function handleForm(field, value) {
    switch (field) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "pass":
        setPass(value);
        break;

      case "whatsapp":
        setWhatsapp(value);
        break;

      default:
        break;
    }
  }

  async function handleSubmit() {
    // await firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, pass)
    //   .then((res) => {
    //     console.log(res);
    //     const userData = {
    //       uid: res.user.uid,
    //       name,
    //       email,
    //       whatsapp,
    //       orderHistory: [],
    //     };
    //     db.collection("users")
    //       .doc(res.user.uid)
    //       .set(userData)
    //       .then(() => (window.location.href = "/"))
    //       .catch((err) => {
    //         console.log(err.message);
    //         toast.error(err.message, {
    //           position: "bottom-center",
    //         });
    //       });
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     toast.error(err.message, {
    //       position: "bottom-center",
    //     });
    //   });
  }

  // aaaa

  return (
    <>
      <Construction />
      {/* <div className="min-h-screen flex bg-gray-200">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mt-24">
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign up
          </h2>
          <p className="mt-2 text-center text-md text-gray-600">
            already have an account?{" "}
            <Link href="/login">
              <a className="text-blue-500">Log in</a>
            </Link>
          </p>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignupForm
            email={email}
            pass={pass}
            whatsapp={whatsapp}
            name={name}
            handleForm={handleForm}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>

      <ToastContainer position="bottom-center" />
    </div> */}
    </>
  );
}

export default signup;
