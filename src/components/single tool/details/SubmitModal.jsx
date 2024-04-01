import Button from "../../ui/Button";
import { RxCross2 } from "react-icons/rx";

const SubmitModal = ({ setIsModalActive, isModalActive }) => {
  return (
    <div
      onClick={() => setIsModalActive(false)}
      className={`fixed inset-0 blur-glass flex items-center justify-center p-5 z-[100] transition-all duration-300 ${
        isModalActive ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-8 bg-white rounded-2xl max-w-[800px]"
      >
        <div className="flex items-center justify-between gap-20 relative">
          <h1 className="font-bold text-xl mt-2">
            Get Your Daily Dose of News with a Growth Tools
          </h1>
          <RxCross2
            onClick={() => setIsModalActive(false)}
            className="text-xl text-black absolute right-0 -top-5"
          />
        </div>
        <p className="text-sm font-medium text-extraDarkGray mb-10">
          Learn & grow with FREE marketing guides & tips from the greatest
          marketers.
        </p>
        <form
          className={`flex items-center justify-between border border-strock rounded-[36px] w-full bg-white pl-5 pr-1  py-1  mb-3`}
        >
          <input
            placeholder="Search..."
            type="text"
            className={"w-full outline-none"}
          />
          <Button className="bg-gradient-2 py-2 px-10">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default SubmitModal;
