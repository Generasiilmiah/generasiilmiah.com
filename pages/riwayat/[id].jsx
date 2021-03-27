import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import nookies from "nookies";
import { verifyIdToken } from "../../firebaseAdmin";
import firebase from "firebase/app";

export default function Riwayat(props) {
  const [transactionData, setTransactionData] = useState();
  const router = useRouter();
  const transactionId = router.query.id;

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("users")
      .doc(props.session.uid)
      .collection("purchaseHistory")
      .where("transactionId", "==", transactionId)
      .get()
      .then((document) => {
        console.log(document);
        const fetch = document.docs.map((item) => {
          return item.data();
        });
        setTransactionData(fetch);
      });
  }, []);

  console.log(props, transactionData);

  return <div></div>;
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;

    // const FIREBASE_CONFIG = {
    //   apiKey: "AIzaSyBRXpXtZxo5VnogmuJ-uJANAwYQ6E1E9Y8",
    //   authDomain: "generasi-ilmiah-web.firebaseapp.com",
    //   databaseURL: "https://generasi-ilmiah-web-default-rtdb.firebaseio.com/",
    //   projectId: "generasi-ilmiah-web",
    //   storageBucket: "generasi-ilmiah-web.appspot.com",
    //   messagingSenderId: "233255754923",
    //   appId: "1:233255754923:web:56ff5020c3baae27f4abee",
    //   measurementId: "G-SWSCZYPDR2",
    // };

    // if (!firebase.apps.length) {
    //   firebase.initializeApp(FIREBASE_CONFIG);
    // }
    // const db = firebase.firestore();

    // const fetch = await db
    //   .collection("users")
    //   .doc(uid)
    //   .collection("purchaseHistory")
    //   .where("transactionId", "==", id)
    //   .get();
    // const transactionData = fetch.data();

    return {
      props: {
        session: {
          uid,
          email,
        },
      },
    };
  } catch (err) {
    // context.res.writeHead(302, { location: "/login" });
    // context.res.end();
    console.log(err);

    return {
      props: {
        session: {},
      },
    };
  }
}
