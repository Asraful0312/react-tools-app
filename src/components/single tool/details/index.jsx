import { Link, useLocation, useParams } from "react-router-dom";
import Button from "../../ui/Button";
import { GiAchievement } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import SubmitModal from "./SubmitModal";
import { useState } from "react";

const Details = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const location = useLocation();
  const { name } = useParams();
  const { pathname, state } = location;

  return (
    <>
      {pathname !== "/" && (
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Link to="/" className="font-bold">
            Homepage /
          </Link>
          {state && <Link className="capitalize text-black/40">{state} /</Link>}
          <Link className="capitalize text-black/40">{name}</Link>
        </div>
      )}
      <div className="pb-10 border-b border-strock">
        <div className="flex flex-wrap gap-6 items-center">
          <img className="cursor-pointer" src="/images/shot.png" alt="image" />
          <h1 className="text-4xl font-bold">Domyshoot</h1>
          <Button
            variant="gradient"
            className="flex items-center gap-2 rounded-lg"
          >
            <GiAchievement className="text-white text-xl" />
            <h1 className="text-sm font-medium text-white">Peer Reviewed</h1>
          </Button>
          <img className="w-5 h-5" src="/icons/gas.png" alt="gas image" />
        </div>
        <div className="mt-6 flex items-center gap-6">
          <a className="w-full" href="">
            <Button
              variant="primary"
              className="w-full flex items-center justify-center gap-3"
            >
              <h1 className="text-white font-bold">Visit Website</h1>
              <img src="/icons/link.png" alt="link image" />
            </Button>
          </a>
          <Button
            variant="orange"
            className="flex items-center justify-center gap-3"
          >
            <h1 className="text-white font-bold">52k</h1>
            <img src="/icons/clap.png" alt="clap image" />
          </Button>
        </div>
      </div>
      {/* details */}
      <div className="space-y-12">
        {/* website screenshot */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Website Screenshot</h1>
          <img className="w-full" src="/images/ss.png" alt="screenshot image" />
        </div>
        {/* deals */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Deals</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-5 border border-strock rounded-2xl">
              <h1 className="text-lg font-semibold mb-2">Lifetime 50% off</h1>
              <div className="space-y-3">
                <p className="text-extraDarkGray text-sm">
                  $4.99 $10 / monthly
                </p>
                <button className="py-2 px-3 block border border-strock rounded-lg bg-white">
                  <h1 className="font-medium text-gradient-green">
                    You save $5.01
                  </h1>
                </button>
                <Link className="text-sm text-accentBlue font-medium">
                  Click to learn more
                </Link>
              </div>
            </div>
            <div className="p-5 border border-strock rounded-2xl">
              <h1 className="text-lg font-semibold mb-2">Lifetime 50% off</h1>
              <div className="space-y-3">
                <p className="text-extraDarkGray text-sm">
                  $4.99 $10 / monthly
                </p>
                <button className="py-2 px-3 block border border-strock rounded-lg bg-white">
                  <h1 className="font-medium text-gradient-green">
                    You save $5.01
                  </h1>
                </button>
                <Link className="text-sm text-accentBlue font-medium">
                  Click to learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Description</h1>
          <p className="text-extraDarkGray font-medium">
            Sed pretium augue magna, id vehicula purus faucibus et. Sed eros
            justo, tincidunt sit amet suscipit at, cursus a metus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam
            facilisis ligula, rhoncus finibus nunc sodales a. Donec in luctus
            nisi. Sed luctus nisl in nisl semper aliquet. Morbi quam quam,
            convallis vel euismod in, interdum id libero. Donec in tellus quis
            dui interdum semper nec vitae felis.
          </p>
        </div>
        {/* suggetion to add own tools */}
        <div className="py-8 px-6 tool-suggetion flex flex-wrap gap-5 items-center justify-between">
          <div className="flex items-center gap-6">
            <img src="/icons/light.png" alt="light icon" />
            <h1 className="font-medium ">
              Do you have a better suggestion <br /> for Email Marketing?
            </h1>
          </div>
          <Button
            onClick={() => setIsModalActive(true)}
            className="bg-gradient-3 flex items-center gap-3"
          >
            <GoPlus className="text-white text-2xl" />
            <h1 className="text-sm font-medium text-white">Submit Tool</h1>
          </Button>

          <SubmitModal
            isModalActive={isModalActive}
            setIsModalActive={setIsModalActive}
          />
        </div>
        {/* discover tools */}
        <div>
          <h1 className="text-lg font-semibold mb-4">
            Discover <span className="text-accentBlue">more</span> Ads
            Management tools
          </h1>
          <div className="space-y-4">
            <div className="bg-white border border-strock p-3 rounded-2xl flex gap-4 ">
              <div
                className="w-12 h-12 rounded-lg
       shadow-sm bg-white border border-strock p-2"
              >
                <img
                  className="w-8 h-8"
                  src="/images/Group 7.png"
                  alt="image"
                />
              </div>
              <div>
                <h1 className="font-bold">iNewsletter</h1>
                <p className="text-sm text-extraDarkGray">
                  Quickly publish, edit and distribute more engaging content for
                  your multi-page, long format newsletter.
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg
       shadow-sm bg-white border border-strock p-2"
                  >
                    <img className="" src="/icons/gas.png" alt="image" />
                  </div>
                  <Button className="border none bg-transparent px-2 text-darkBlue">
                    Deal
                  </Button>
                </div>
              </div>
            </div>
            <div className="border border-strock p-3 rounded-2xl flex  gap-4">
              <div
                className="w-12 h-12 rounded-lg
       shadow-sm bg-white border border-strock p-2"
              >
                <img
                  className="w-8 h-8"
                  src="/images/Group 7.png"
                  alt="image"
                />
              </div>
              <div>
                <h1 className="font-bold">Salesmate</h1>
                <p className="text-sm text-extraDarkGray">
                  Quickly publish, edit and distribute more engaging content for
                  your multi-page, long format newsletter.
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-accentBlue">
              Browse 1 Ads Management tools
            </p>
          </div>
        </div>

        {/* vist website */}
        <div className="flex items-center gap-6">
          <a className="w-full" href="">
            <Button
              variant="primary"
              className="w-full flex items-center justify-center gap-3"
            >
              <h1 className="text-white font-bold">Visit Website</h1>
              <img src="/icons/link.png" alt="link image" />
            </Button>
          </a>
          <Button
            variant="orange"
            className="flex items-center justify-center gap-3"
          >
            <h1 className="text-white font-bold">52k</h1>
            <img src="/icons/clap.png" alt="clap image" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Details;
