import React from "react";
import PropTypes from "prop-types";
import nookies from "nookies";
import { verifyIdToken } from "../firebaseAdmin";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";

function pengguna({ session }) {
  firebaseClient();

  if (session) {
    return (
      <div>
        <button
          type="submit"
          className="w-28 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          onClick={async () => {
            await firebase.auth().signOut();
            window.location.href = "/";
          }}
        >
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <div className="h-screen flex items-center justify-center">
        Unauthenticated!
      </div>
    );
  }
}
export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;

    return {
      props: { session: `Logged in with ${email}` },
    };
  } catch (err) {
    context.res.writeHead(302, { location: "/login" });
    context.res.end();

    return { props: {} };
  }
}

export default pengguna;
