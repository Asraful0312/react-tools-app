import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useLocation } from "react-router-dom";

const MobileMenu = ({ isMobileMenu, setIsAiSearch, setIsMobileMenu }) => {
  const location = useLocation();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`bg-white absolute right-0 p-5 w-[300px] border border-strock rounded-xl flex flex-col gap-5 transition-all duration-300 top-14 xl:hidden z-[100] ${
        isMobileMenu ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="flex items-center justify-between gap-5">
        <Link to="/">
          <img className="w-[96px]" src="/icons/logo1.png" alt="logo" />
        </Link>
        <img
          className="cursor-pointer"
          src="/icons/Frame 11.png"
          alt="sun icon"
        />
      </div>
      {location.pathname !== "/result/" &&
        location.pathname !== "/signin" &&
        location.pathname !== "/signup" && (
          <Button
            onClick={() => {
              setIsAiSearch(true);
              setIsMobileMenu(false);
            }}
            variant="gradient"
            className="flex items-center gap-2"
          >
            <img src="/icons/icons8-bot 1.png" alt="icons" />
            <h3>Try AI Search</h3>
          </Button>
        )}

      {location.pathname !== "/signin" &&
        location.pathname !== "/signup" &&
        "/result/" && (
          <Button variant="secondry" className="flex items-center gap-2">
            <img src="/icons/plus.png" alt="icons" />

            <h3>Submit Tool</h3>
          </Button>
        )}
      <Button variant="primary">Sign Up</Button>
    </div>
  );
};

export default MobileMenu;
