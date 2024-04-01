import { IoFilterSharp } from "react-icons/io5";
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <div
      className={`border z-50 absolute top-0 transition-all md:w-[350px] duration-300 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <Button
        onClick={() => setShowModal(false)}
        variant="gradient"
        className="flex items-center gap-3"
      >
        <IoFilterSharp />
        <h1>Filter</h1>
      </Button>
      <div className="bg-white p-5 mt-4 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">Filter</h1>
          <h1 className="font-medium text-darkBlue text-sm cursor-pointer">
            Reset
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <CheckBox itemName="Deals" />
          <CheckBox itemName="Trends" />
        </div>
        <h1 className="font-bold">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
          <CheckBox itemName="Analytics" />
          <CheckBox itemName="File Management" />
          <CheckBox itemName="Design" />
          <CheckBox itemName="Content" />
          <CheckBox itemName="Productivity" />
          <CheckBox itemName="Email Marketing" />
          <CheckBox itemName="SEO" />
          <CheckBox itemName="Customer Support" />
          <CheckBox itemName="Social Media" />
        </div>
        <h1 className="font-bold">Sort by</h1>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <input id="rating" type="radio" />
            <label
              className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize"
              htmlFor="rating"
            >
              Rating
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input id="a-z" type="radio" />
            <label
              className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize"
              htmlFor="a-z"
            >
              A-Z
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input id="z-a" type="radio" />
            <label
              className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize"
              htmlFor="z-a"
            >
              Z-A
            </label>
          </div>
        </div>
        <Button variant="primary" className="w-full mt-3">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Modal;
