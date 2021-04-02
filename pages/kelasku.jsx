import React, { useState } from "react";
import nookies from "nookies";
import { verifyIdToken } from "../firebaseAdmin";
import KelaskuItem from "../components/KelaskuItem";
import Modal from "react-modal";
import ClassDetail from "../components/ClassDetail";

function Kelasku() {
  const [displaySelect, setDisplaySelect] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);

  function openModal() {
    setOpenDetail(true);
  }

  function closeModal() {
    setOpenDetail(false);
  }

  let classOutput;

  function setDisplayOutput() {
    switch (displaySelect) {
      case 0:
        classOutput = (
          <>
            <KelaskuItem openModal={openModal} />
            <KelaskuItem openModal={openModal} />
          </>
        );

        return;

      case 1:
        classOutput = (
          <>
            <KelaskuItem openModal={openModal} />
          </>
        );

        return;

      case 2:
        classOutput = (
          <>
            <KelaskuItem openModal={openModal} />
            <KelaskuItem openModal={openModal} />
            <KelaskuItem openModal={openModal} />
          </>
        );
        return;

      default:
        return;
    }
  }
  setDisplayOutput();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="md:container md:mx-auto px-6">
      <h3 className="font-bold text-2xl mb-4">Kelasku</h3>
      <div className="flex gap-4 mb-8">
        <button
          className="py-1 px-6 bg-red-500 text-white font-bold rounded-lg"
          onClick={() => setDisplaySelect(0)}
        >
          Aktif
        </button>
        <button
          className="py-1 px-6 bg-white border border-gray-400 rounded-lg hover:bg-red-500 hover:text-white hover:font-bold transition duration-150 ease-in-out"
          onClick={() => setDisplaySelect(1)}
        >
          Selesai
        </button>
        <button
          className="py-1 px-6 bg-white border border-gray-400 rounded-lg hover:bg-red-500 hover:text-white hover:font-bold transition duration-150 ease-in-out"
          onClick={() => setDisplaySelect(2)}
        >
          Semua
        </button>
      </div>

      <div className="w-3/5 rounded-lg border border-gray-400 py-6 px-6">
        {classOutput}
      </div>
      <Modal
        isOpen={openDetail}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ClassDetail />
      </Modal>
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

export default Kelasku;
