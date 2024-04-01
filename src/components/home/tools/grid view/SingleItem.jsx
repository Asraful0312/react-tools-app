import { Link } from "react-router-dom";

const SingleItem = ({ data }) => {
  const { name, category, image, description, isAd } = data || {};

  return (
    <div className="shadow-lg ">
      <div className="bg-white rounded-2xl flex flex-col justify-center ">
        <div className="flex items-center justify-between px-5">
          <div className="">
            <img className="h-full" src="/images/Group 7.png" alt="image" />
          </div>
          <div className="flex items-center gap-5">
            <img src="/icons/gas.png" alt="gas" />
            <img src="/icons/icon2.png" alt="image" />
            <h1 className="font-bold text-accentBlue">Deal</h1>
          </div>
        </div>
        <img className="-mt-12" src={image} alt="image" />
        <div className="px-4 my-4">
          <div className="flex items-center gap-3">
            <Link
              state={category}
              to={`/tool/${name}`}
              className="my-2 font-bold"
            >
              {name}
            </Link>
            {isAd && (
              <div className="flex items-center justify-center bg-[#B7B7B74D]/30 w-10 h-6 rounded">
                <h1 className="font-bold text-sm">AD</h1>
              </div>
            )}
          </div>
          <p className="text-extraDarkGray text-sm font-medium mb-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
