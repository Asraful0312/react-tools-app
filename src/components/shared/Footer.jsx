import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="w-full px-12 bg-slate-100 flex items-center  border-t border-strock">
      <div className="flex justify-around py-9 gap-10 w-full flex-wrap">
        <div className="">
          <Link to="/">
            <img src="/icons/logo1.png" alt="logo" />
          </Link>
        </div>
        <div className=" space-y-3">
          <h1 className="font-semibold">Menu</h1>
          <h1 className="font-medium text-sm">Growth Virality</h1>
          <h1 className="font-medium text-sm">Growth Newsletter</h1>
          <h1 className="font-medium text-sm">Growth Articles</h1>
        </div>
        <div className=" flex items-center">
          <div>
            <h1 className="font-medium text-sm mb-3">Get in touch</h1>
            <div className="flex items-center gap-2">
              <img src="/icons/plus.png" alt="icon" />
              <h1 className="font-medium text-sm">
                Join our Discord community
              </h1>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="font-semibold">Follow Us</h1>
          <div className="flex items-center gap-6">
            <img src="/icons/social/tiktok.png" alt="tiktok icon" />
            <img src="/icons/social/twitter.png" alt="twitter icon" />
            <img src="/icons/social/instagram.png" alt="instagram icon" />
          </div>
        </div>
        <div className="ml-10">
          <Button variant="secondry" className="whitespace-nowrap">
            Contact Us
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
