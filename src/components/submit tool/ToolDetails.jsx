import { useState } from "react";
import TextInput from "./../ui/TextInput";
import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";
import nextId from "react-id-generator";
import Button from "../ui/Button";

const ToolDetails = () => {
  const [featureInputs, setFeautreInputs] = useState([""]);
  const [useCaseInputs, setUseCase] = useState([""]);
  const [screenShot, setScreenShot] = useState([]);

  console.log(screenShot);

  const handleFeatureChange = (index, value) => {
    const values = [...featureInputs];
    const inputWords = value.split(/\s+/); //
    if (
      inputWords.every((word) => word.length <= 15) &&
      inputWords.length <= 15
    ) {
      values[index] = value;
      setFeautreInputs(values);
    }
    return;
  };

  const handleUseCaseChange = (index, value) => {
    const values = [...useCaseInputs];
    const inputWords = value.split(/\s+/); //
    if (
      inputWords.every((word) => word.length <= 15) &&
      inputWords.length <= 25
    ) {
      values[index] = value;
      setUseCase(values);
    }
    return;
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setScreenShot((prev) => [
        ...prev,
        { id: nextId(), img: URL.createObjectURL(event.target.files[0]) },
      ]);
    }
  };

  const handleSsDelete = (id) => {
    const updatedSs = screenShot.filter((ss) => ss.id !== id);
    setScreenShot(updatedSs);
  };

  console.log(featureInputs);

  return (
    <>
      <div className="border-b border-strock">
        <h1 className="text-3xl mb-3 font-bold">
          Post your tool to a global audience
        </h1>
        <p className="text-extraDarkGray font-medium mb-10">
          We're always looking for the most innovative tools to share with our
          audiences. Use our form to submit yours today.
        </p>
      </div>
      <div className="space-y-12 mt-12 ">
        {/* name */}
        <div>
          <h3>Name</h3>
          <TextInput label="Name" className="w-full" />
        </div>
        {/* short description */}
        <div>
          <h3>Short Description</h3>
          <textarea
            className="w-full p-5 rounded-2xl border border-strock outline-none"
            cols="20"
            rows="5"
            placeholder="e.g. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
          ></textarea>
        </div>
        {/* website */}
        <div>
          <h3>Website</h3>
          <form
            className={`flex items-center justify-between border border-strock rounded-[36px] w-full bg-white px-5 py-2 md:py-4`}
          >
            <input
              type="text"
              placeholder="https://"
              className={"w-full outline-none"}
            />
          </form>
          <p className="text-extraDarkGray mt-4">(must include 'https://')</p>
        </div>
        {/* logo */}
        <div className="space-y-4">
          <h3>Logo</h3>

          <label
            className="py-3 px-6 rounded-[40px] border border-black flex items-center gap-3 w-[130px]"
            htmlFor="file"
          >
            Upload
            <img src="/icons/upload.png" alt="upload image" />
          </label>
          <input className="sr-only" id="file" type="file" />
          <p className="text-extraDarkGray mt-4">png, svg formats. 5mb max</p>
        </div>
        {/* screenshots */}
        <div>
          <h3>Screenshorts</h3>
          <div className="flex items-center gap-5 flex-wrap mb-5">
            {screenShot?.map((item) => (
              <div
                key={item.id}
                className="size-[160px] relative rounded-2xl overflow-hidden group"
              >
                <img
                  className="w-full h-full rounded-2xl "
                  src={item.img}
                  alt="placeholder image"
                />
                <div className="absolute transition-all duration-500 inset-0 translate-y-[500px] group-hover:translate-y-0 bg-black/55 rounded-2xl p-5">
                  <div
                    onClick={() => handleSsDelete(item.id)}
                    className="flex items-center justify-end caret-purple-50"
                  >
                    <img
                      className="cursor-pointer"
                      src="/icons/trash.png"
                      alt="trash icon"
                    />
                  </div>
                  <div className="flex items-end h-full ">
                    <h1 className="text-white font-medium text-sm mb-3">
                      Set as cover
                    </h1>
                  </div>
                </div>
              </div>
            ))}
            <div className="size-[160px] relative rounded-2xl overflow-hidden group">
              <img
                className="w-full h-full rounded-2xl "
                src="/images/placeholder.png"
                alt="placeholder image"
              />
              <div className="absolute transition-all duration-500 inset-0 translate-y-[500px] group-hover:translate-y-0 bg-black/55 rounded-2xl p-5">
                <div className="flex items-center justify-end">
                  <img
                    className="cursor-pointer"
                    src="/icons/trash.png"
                    alt="trash icon"
                  />
                </div>
                <div className="flex items-end h-full ">
                  <h1 className="text-white font-medium text-sm mb-3">
                    Set as cover
                  </h1>
                </div>
              </div>
            </div>
            <div className="size-[160px] relative rounded-2xl overflow-hidden group flex items-center justify-center bg-[#EAEAEA]">
              <div>
                <img
                  className=" rounded-2xl "
                  src="/images/placeholder svg.png"
                  alt="placeholder image"
                />
                <p className="text-extraDarkGray text-center mt-2">15%</p>
              </div>
            </div>
          </div>
          <label
            className="py-3 px-6 rounded-[40px] border border-black flex items-center gap-3 w-[130px]"
            htmlFor="screenshots"
          >
            Upload
            <img src="/icons/upload.png" alt="upload image" />
          </label>
          <input
            onChange={onImageChange}
            className="sr-only"
            id="screenshots"
            type="file"
          />
          <p className="text-extraDarkGray mt-4">png, svg formats. 5mb max</p>
        </div>
        {/* deals */}
        <div>
          <h3>Deals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            <div className="p-5 border border-strock rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg">Lifetime 50% off</h2>
                <div className="flex items-center gap-3">
                  <GoPencil className="text-accentBlue cursor-pointer" />
                  <GoTrash className="text-red-500 cursor-pointer" />
                </div>
              </div>
              <p className="text-sm text-extraDarkGray ">
                $4.99 <span className="text-[#AFAFAF] line-through">$10</span> /
                monthly
              </p>
              <button className="py-1 px-2 rounded-lg border border-stroke">
                <h1 className="text-accentGreen">You save $5.01</h1>
              </button>
              <a className="text-accentBlue block font-clash-display font-medium text-sm cursor-pointer">
                Click to learn more
              </a>
            </div>
            <div className="p-5 border cursor-pointer border-strock rounded-2xl flex items-center justify-center flex-col gap-5">
              <GoPlusCircle className="text-5xl text-accentBlue" />
              <h1 className="text-accentBlue block font-clash-display font-medium text-sm">
                Create new
              </h1>
            </div>
          </div>
        </div>
        {/* key features */}
        <div>
          <h3>Key Features</h3>
          <p className="text-extraDarkGray mb-4">
            Sed ut perspiciatis unde omnis iste natus
          </p>
          <div className="space-y-4">
            {featureInputs?.map((value, index) => (
              <input
                key={index}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                value={value}
                className="w-full py-4 px-6 rounded-[36px] border border-strock outline-none"
                placeholder="e.g. Sed ut perspiciatis unde omnis iste natus "
                type="text"
                name=""
                id=""
              />
            ))}
            <button
              onClick={() => setFeautreInputs((prev) => [...prev, ""])}
              className="text-accentBlue block font-clash-display font-medium text-sm"
            >
              Add Key Features +
            </button>
            <p className="text-extraDarkGray mt-4">maximum 15 words per each</p>
          </div>
        </div>
        {/* use cases */}
        <div>
          <h3>Use Cases</h3>
          <div className="space-y-4">
            {useCaseInputs?.map((value, index) => (
              <input
                key={index}
                onChange={(e) => handleUseCaseChange(index, e.target.value)}
                value={value}
                className="w-full py-4 px-6 rounded-[36px] border border-strock outline-none"
                placeholder="e.g. Sed ut perspiciatis unde omnis iste natus "
                type="text"
                name=""
                id=""
              />
            ))}
            <button
              onClick={() => setUseCase((prev) => [...prev, ""])}
              className="text-accentBlue block font-clash-display font-medium text-sm"
            >
              Add Use Case +
            </button>
            <p className="text-extraDarkGray mt-4">maximum 25 words per each</p>
          </div>
        </div>
        {/* price */}
        <div>
          <h3>Price</h3>
          <div className="flex items-center border border-strock rounded-[36px] w-full bg-white px-5">
            <input
              placeholder="0.00"
              className="outline-none w-full py-1 md:py-4"
              type="text"
            />
            <button className="px-6 text-[#8C8C8C] font-bold border-l border-strock py-1 md:py-4">
              USD
            </button>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <input id="free" type="checkbox" />
            <label
              className="font-medium text-extraDarkGray text-sm"
              htmlFor="free"
            >
              Free
            </label>
          </div>
        </div>
        {/* category */}
        <div>
          <h3>Category</h3>
          <select
            className="w-full py-4 px-5 rounded-[36px] border border-strock bg-transparent"
            id=""
          >
            <option value="">Select Category</option>
          </select>
        </div>
        <Button variant="primary" className="w-full">
          Publish
        </Button>
      </div>
    </>
  );
};

export default ToolDetails;
