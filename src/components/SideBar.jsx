import { useState } from "react";
import { NavLink } from "react-router-dom";
import links from "../constans/links";

const SideBar = () => {
  const [isCollapes, setIsCollapes] = useState(true);

  return (
    <aside
      className={`hidden xl:flex border-r bg-white  border-strock py-6 px-4 flex-col justify-between overflow-hidden transition-all duration-500 relative ${
        isCollapes ? "w-[55px]" : "w-full md:w-[250px]"
      }`}
    >
      <div>
        <div
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
        </div>
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
  );
};

export default SideBar;
