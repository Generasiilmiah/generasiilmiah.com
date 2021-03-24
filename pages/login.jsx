import React, { useState } from "react";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Construction from "../components/Construction";
import Head from "next/head";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

function login(props) {
  firebaseClient();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleForm(field, value) {
    switch (field) {
      case "email":
        setEmail(value);
        break;

      case "pass":
        setPass(value);
        break;

      default:
        break;
    }
  }

  async function handleSubmit() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => (window.location.href = "/"))
      .catch((err) => {
        toast.error(err.message, {
          position: "bottom-center",
        });
      });
  }

  return (
    <>
      <Head>
        <title>Login - Generasi Ilmiah</title>
      </Head>
      {/* <Construction /> */}
      <div className="min-h-screen flex flex-col justify-center bg-gray-200">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center mt-24">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in
            </h2>
            <p className="mt-2 text-center text-md text-gray-600">
              {"Don't have an account? "}
              <Link href="/signup">
                <a href="#" className="text-blue-500">
                  Sign Up
                </a>
              </Link>
            </p>
          </div>
          <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <LoginForm
              email={email}
              pass={pass}
              handleForm={handleForm}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>

        <ToastContainer position="bottom-center" />
      </div>
    </>
  );
}

export default login;
