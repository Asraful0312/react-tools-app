import Button from "./../../ui/Button";
import { IoFilterSharp } from "react-icons/io5";
import { CiViewColumn } from "react-icons/ci";
import { HiOutlineViewColumns } from "react-icons/hi2";
import { useState } from "react";
import Modal from "./Modal";

const Controller = ({ currentView, setCurrentView }) => {
  const [showModal, setShowModal] = useState(false);
  console.log("modal", showModal);
  return (
    <div className="pb-10 flex items-center gap-4 flex-wrap ">
      <div className="w-full h-[1px] bg-strock mb-5"></div>
      <div className="relative block">
        <Button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-[#F6F6F6] text-darkBlue gap-3"
        >
          <IoFilterSharp />
          <h1>Filter</h1>
        </Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
      {/* blur background */}
      <div
        onClick={() => setShowModal(false)}
        className={`fixed z-10 inset-0 blur-glass transition-all duration-300 ${
          showModal ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />
      <p className="text-extraDarkGray">Show as:</p>
      <CiViewColumn
        onClick={() => setCurrentView("column")}
        className={`text-3xl cursor-pointer ${
          currentView === "column" ? "text-darkBlue" : "text-black"
        }`}
      />
      <HiOutlineViewColumns
        onClick={() => setCurrentView("grid")}
        className={`text-3xl cursor-pointer ${
          currentView === "grid" ? "text-darkBlue" : "text-black"
        }`}
      />
    </div>
  );
};

export default Controller;
