import React from "react";
import { withRouter } from "next/router";
import Collapsible from "react-collapsible";
import AccordionTitle from "../../components/AccordionTitle";
import AccordionContent from "../../components/AccordionContent";
import Link from "next/link";

function Pembayaran(props) {
  console.log(props);
  return (
    <div className="px-6 md:max-w-3xl md:mx-auto ">
      <div className="text-center py-10">
        <h3 className="font-bold  text-lg">Mohon transfer sebesar</h3>
        <h2 className="font-bold text-4xl mt-2">
          Rp 90.<span className="text-red-600">294</span>
        </h2>
        <small className="text-defocused">
          Transfer hingga 3 digit terakhir
        </small>
      </div>

      <h3 className="font-bold">Nomor rekening</h3>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-around mb-10 mt-4">
        <div className="text-center">
          <img
            src="/assets/svg/bank-bni.svg"
            alt=""
            className="block mx-auto my-4 h-10"
          />
          <h3 className="font-bold text-lg mb-1">Bank BNI</h3>
          <p className="font-bold">068 5958 960</p>
          <small>A/N Riyan Siregar</small>
        </div>

        <div className="text-center">
          <img
            src="/assets/svg/bank-bri.svg"
            alt=""
            className="block mx-auto my-4 h-10"
          />
          <h3 className="font-bold text-lg mb-1">Bank BRI</h3>
          <p className="font-bold">0688 595897 9609</p>
          <small>A/N Riyan Siregar</small>
        </div>
      </div>

      <h3 className="font-bold">Cara pembayaran</h3>
      <div className="rounded-lg overflow-hidden my-6 border border-gray-200">
        <Collapsible
          trigger={<AccordionTitle title="Bank BRI" />}
          triggerStyle={{ cursor: "pointer" }}
          transitionTime={200}
          easing="ease-in-out"
        >
          <AccordionContent items={["Buka aplikasi", "Klik transfer"]} />
        </Collapsible>

        <Collapsible
          trigger={<AccordionTitle title="Bank BNI" />}
          triggerStyle={{ cursor: "pointer" }}
          transitionTime={200}
          easing="ease-in-out"
        >
          <AccordionContent items={["Buka aplikasi", "Klik transfer"]} />
        </Collapsible>
      </div>

      <div className="text-center my-20">
        <Link href="#">
          <a className="bg-red-500 hover:bg-red-400 active:bg-red-400 transitioni duration-150 ease-in-out py-4 px-8 rounded-lg shadow-lg font-bold text-white">
            Sudah bayar
          </a>
        </Link>
      </div>
      <div className="text-center my-20">
        <Link href="#">
          <a className="border-2 border-red-500 hover:border-red-400 active:border-red-400 transitioni duration-150 ease-in-out py-4 px-8 rounded-lg shadow-lg font-bold">
            Lihat transaksi
          </a>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Pembayaran);
