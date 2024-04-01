import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const AiSearchBar = ({ setIsAiSearch }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/result/?search=resultValue");
    setIsAiSearch(false);
  };

  return (
    <div
      onClick={() => setIsAiSearch(false)}
      className="fixed z-[60] inset-0 flex items-center justify-center px-5  blur-glass"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-5 max-h-[80vh] overflow-y-scroll z-[100] max-w-[800px] rounded-2xl"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-5">
            <img src="/icons/bot.png" alt="bot image" />
            <h1 className="font-bold text-2xl">AI Search is here!</h1>
          </div>
          <div className="cursor-pointer" onClick={() => setIsAiSearch(false)}>
            <RxCross2 className="text-black text-xl" />
          </div>
        </div>
        <p className="text-sm text-extraDarkGray font-medium mb-8">
          Find the best Marketing assets, with the power of AI-search. Describe
          your project and our AI-assisted search will find you marketing
          websites to elevate your work.
        </p>
        <form
          onSubmit={handleSubmit}
          className={`flex items-center justify-between border border-strock rounded-[36px] w-full bg-white px-5 py-1 md:py-2 mb-10`}
        >
          <input
            placeholder="Search..."
            type="text"
            className={"w-full outline-none"}
          />
          <button type="submit">
            <img
              className="cursor-pointer"
              src="/icons/Frame 8.png"
              alt="search icon"
            />
          </button>
        </form>
        <h1 className="font-bold mb-4">Try an example:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-14 mb-5">
          <div className="flex gap-4">
            <div>
              <img src="/icons/sparkling.png" alt="spark image" />
            </div>
            <div className="space-y-3">
              <p className="text-sm text-extraDarkGray font-medium ">
                Industry-specific Recommendations
              </p>
              <h1 className="font-bold text-sm">
                Suggest marketing strategies for [industry]
              </h1>
              <h1 className="font-bold text-sm">
                List startup ideas for [industry]
              </h1>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src="/icons/sparkling.png" alt="spark image" />
            </div>
            <div className="space-y-3">
              <p className="text-sm text-extraDarkGray font-medium ">
                Industry-specific Recommendations
              </p>
              <h1 className="font-bold text-sm">
                Suggest marketing strategies for [industry]
              </h1>
              <h1 className="font-bold text-sm">
                List startup ideas for [industry]
              </h1>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src="/icons/sparkling.png" alt="spark image" />
            </div>
            <div className="space-y-3">
              <p className="text-sm text-extraDarkGray font-medium ">
                Industry-specific Recommendations
              </p>
              <h1 className="font-bold text-sm">
                Suggest marketing strategies for [industry]
              </h1>
              <h1 className="font-bold text-sm">
                List startup ideas for [industry]
              </h1>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src="/icons/sparkling.png" alt="spark image" />
            </div>
            <div className="space-y-3">
              <p className="text-sm text-extraDarkGray font-medium ">
                Industry-specific Recommendations
              </p>
              <h1 className="font-bold text-sm">
                Suggest marketing strategies for [industry]
              </h1>
              <h1 className="font-bold text-sm">
                List startup ideas for [industry]
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSearchBar;
