import React from "react";
import PropTypes from "prop-types";

function HistoryItem(props) {
  function outputPaymentStatus() {
    if (props.paymentStatus === 1) {
      return <p className="text-blue-600">Menunggu konfirmasi</p>;
    } else if (props.paymentStatus === 2) {
      return <p className="text-green-500">Pembayaran terverifikasi</p>;
    } else if (props.paymentStatus === 0) {
      <p className="text-red-600">Transaksi dibatalkan</p>;
    }
  }

  return (
    <div className="bg-white px-4 shadow-lg rounded-lg mb-6">
      <div className="py-4 border-b border-gray-200 flex gap-6">
        <div className="w-24 md:w-48 h-38 md:h-42 rounded-xl bg-gray-300"></div>
        <div className="">
          <small>{props.category}</small>
          <h3 className="text-lg font-bold mb-1">{props.name}</h3>

          {outputPaymentStatus}
        </div>
      </div>

      <div className="text-right py-2">
        <small className="text-defocused">Total</small>
        <h3 className="font-bold text-xl">Rp {props.price}</h3>
      </div>
    </div>
  );
}

export default HistoryItem;
