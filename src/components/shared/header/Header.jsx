import TextInputIcon from "../../ui/TextInputIcon";
import Button from "../../ui/Button";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import AiSearchBar from "./AiSearchBar";
import { useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import links from "../../../constans/links";

const Header = () => {
  const [isCollapes, setIsCollapes] = useState(true);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isSearchBarShow, setIsSearchBarShow] = useState(false);
  const [isAiSearch, setIsAiSearch] = useState(false);
  const location = useLocation();
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", hideClickOnOutSide);
  }, []);

  const hideClickOnOutSide = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setIsSearchBarShow(false);
    }
  };

  return (
    <header className="py-4 border-b  border-strock px-5 lg:px-12  ">
      <div className="flex  items-center justify-between ">
        <div
          onClick={() => setIsCollapes((prev) => !prev)}
          className={`flex xl:hidden items-center justify-center w-8 h-8 border border-strock rounded-full cursor-pointer bg-white `}
        >
          <img
            className={`w-5 h-5 transition-all duration-300 ${
              isCollapes ? "rotate-180" : "rotate-0"
            }`}
            src="/icons/chevron-left.png"
            alt="left icon"
          />
        </div>
        <div className="mx-10 w-[20%]  xl:mx-0 hidden items-center gap-3 xl:flex ">
          <Link to="/">
            <img className="w-[96px]" src="/icons/logo1.png" alt="logo" />
          </Link>
        </div>
        {/* menu */}
        <div className="flex w-full items-center justify-end gap-2 lg:gap-8 relative">
          {location.pathname !== "/result/" &&
            location.pathname !== "/signin" &&
            location.pathname !== "/signup" && (
              <div ref={refOne} className="relative">
                <TextInputIcon
                  onFocus={() => setIsSearchBarShow(true)}
                  className="py-1 ml-12 xl:ml-0 pl-3 pr-1 w-full xl:w-[280px]"
                />
                <div
                  className={`transition-all duration-300 ${
                    isSearchBarShow
                      ? "visible opacity-100"
                      : "opacity-0 invisible"
                  }`}
                >
                  <SearchBar
                    setIsAiSearch={setIsAiSearch}
                    setIsSearchBarShow={setIsSearchBarShow}
                  />
                </div>

                <div
                  className={`transition-all duration-300 ${
                    !isSearchBarShow && isAiSearch
                      ? "visible opacity-100"
                      : "opacity-0 invisible"
                  }`}
                >
                  <AiSearchBar setIsAiSearch={setIsAiSearch} />
                </div>
              </div>
            )}
          <div
            onClick={() => {
              setIsMobileMenu((prev) => !prev);
              setIsCollapes(true);
            }}
            className="cursor-pointer block ml-12 xl:hidden "
          >
            {isMobileMenu ? (
              <RxCross2 className="text-2xl" />
            ) : (
              <CgMenuRight className="text-2xl" />
            )}
            {/* mobile menu */}
            <MobileMenu
              setIsAiSearch={setIsAiSearch}
              setIsMobileMenu={setIsMobileMenu}
              isMobileMenu={isMobileMenu}
            />
          </div>
          {/*  rigt side */}
          <div className="xl:flex hidden items-center gap-2">
            <img
              className="cursor-pointer"
              src="/icons/Frame 11.png"
              alt="sun icon"
            />
            {/* buttons */}
            {location.pathname !== "/result/" &&
              location.pathname !== "/signin" &&
              location.pathname !== "/signup" && (
                <Button
                  onClick={() => setIsAiSearch(true)}
                  variant="gradient"
                  className="flex items-center gap-2"
                >
                  <img src="/icons/icons8-bot 1.png" alt="icons" />
                  <h3>Try AI Search</h3>
                </Button>
              )}
            {location.pathname !== "/signin" &&
              location.pathname !== "/signup" && (
                <Button variant="secondry" className="flex items-center gap-2">
                  <img src="/icons/plus.png" alt="icons" />

                  <h3>Submit Tool</h3>
                </Button>
              )}
            <Button variant="primary">Sign Up</Button>
          </div>
        </div>
      </div>
      {/* mobile sidebar */}
      <div
        className={`absolute flex items-start w-full md:w-[250px] xl:hidden top-[75px] h-screen bottom-0 inset-0 z-50 transition-all duration-500 ${
          isCollapes ? "-translate-x-[380px]" : "translate-x-0"
        }`}
      >
        <aside
          className={`flex border border-strock bg-white py-6 px-4 flex-col justify-between overflow-hidden transition-all duration-500 relative h-full `}
        >
          <div>
            {/* <div
              onClick={() => setIsCollapes((prev) => !prev)}
              className={`flex items-center justify-center w-8 h-8 border border-strock rounded-full cursor-pointer absolute  z-10 bg-white transition-all duration-500  ${
                isCollapes ? "right-1" : "left-[170px] top-2"
              }`}
            >
              <img
                className={`w-5 h-5 transition-all duration-300 ${
                  isCollapes ? "rotate-180" : "rotate-0"
                }`}
                src="/icons/chevron-left.png"
                alt="left icon"
              />
            </div> */}

            {links?.map((link) => {
              const Icon = link.Icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to === "/" ? "/" : `/category${link.to}`}
                >
                  {({ isActive }) => (
                    <div
                      onClick={() => setIsCollapes((prev) => !prev)}
                      className={`transition-all duration-300 mb-5 mt-2 ${
                        isCollapes ? "translate-y-12" : "translate-y-5"
                      }`}
                    >
                      <div className="mb-5 flex items-center">
                        <div className="mr-5 w-5 h-5">
                          <Icon
                            className={`text-2xl ${
                              isActive
                                ? "text-darkBlue font-bold"
                                : "text-extraDarkGray font-medium"
                            }`}
                          />
                        </div>
                        <p
                          className={`whitespace-nowrap ${
                            isActive
                              ? "text-darkBlue font-bold"
                              : "text-extraDarkGray font-medium"
                          }`}
                        >
                          {link?.text}
                        </p>
                      </div>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
          <p
            className={`text-darkGray transition-all duration-300  ${
              isCollapes ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
          >
            © Growth Virality Inc. All Rights Reserved 2024
          </p>
        </aside>
      </div>
    </header>
  );
};

export default Header;
