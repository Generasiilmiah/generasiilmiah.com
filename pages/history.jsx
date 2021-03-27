import React, { useEffect, useState } from "react";
import HistoryItem from "../components/HistoryItem";
import nookies from "nookies";
import { verifyIdToken } from "../firebaseAdmin";
// import numberWithSeparator from "../numberWithSeparator";
import firebase from "firebase";

export default function history(props) {
  console.log(props);
  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("users")
      .doc(props.session.uid)
      .collection("purchaseHistory")
      .get()
      .then((document) => {
        console.log(document);
        const fetch = document.docs.map((item) => {
          return item.data();
        });
        setHistoryData(fetch);
      });
  }, []);

  const tempData = {
    purchases: [
      {
        name: "Kelas Business Plan",
        price: 90000,
        pkg: 1,
        thumbnail: "/assets/img/bp.webp",
        datePurchase: new Date(1616331334),
        category: "Pembelian",
        paymentStatus: 1,
        transactionId: "alsfjieu",
      },
      {
        name: "Kelas Karya Tulis Ilmiah",
        price: 50000,
        pkg: 0,
        thumbnail: "/assets/img/kti.webp",
        datePurchase: new Date(1616331334),
        category: "Pembelian",
        paymentStatus: 2,
        transactionId: "alsfjieu",
      },
    ],
  };

  console.log(historyData);
  return (
    <div className="md:container md:mx-auto px-6">
      <h3 className="font-bold text-2xl mb-6 mt-6">Keranjang</h3>

      {historyData ? (
        historyData.map((item, idx) => (
          <HistoryItem
            key={idx - 15}
            items={item.items}
            category={item.category}
            name={item.name}
            paymentStatus={item.paymentStatus}
            price={item.price}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;

    return {
      props: { session: { uid, email } },
    };
  } catch (err) {
    return { props: { session: {} } };
  }
}
