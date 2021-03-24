import React from "react";
import HistoryItem from "../components/HistoryItem";

export default function history() {
  const tempData = {
    purchases: [
      {
        name: "Kelas Business Plan",
        price: "90.000",
        pkg: 1,
        thumbnail: "/assets/img/bp.webp",
        datePurchase: new Date(1616331334),
        category: "Pembelian",
        paymentStatus: 1,
        transactionId: "alsfjieu",
      },
      {
        name: "Kelas Karya Tulis Ilmiah",
        price: "50.000",
        pkg: 0,
        thumbnail: "/assets/img/kti.webp",
        datePurchase: new Date(1616331334),
        category: "Pembelian",
        paymentStatus: 2,
        transactionId: "alsfjieu",
      },
    ],
  };
  return (
    <div className="md:container md:mx-auto px-6">
      <h3 className="font-bold text-2xl mb-6 mt-6">Keranjang</h3>

      {tempData.purchases.map((item, idx) => (
        <HistoryItem
          key={idx - 15}
          category={item.category}
          name={item.name}
          paymentStatus={item.paymentStatus}
          price={item.price}
        />
      ))}
      <HistoryItem />
    </div>
  );
}
