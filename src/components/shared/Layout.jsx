import SideBar from "../SideBar";
import Header from "./header/Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="flex">
      {pathname !== "/signin" && pathname !== "/signup" && <SideBar />}
      <section className="w-full flex flex-col">
        <Header />
        <div className="">{children}</div>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
