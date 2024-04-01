import Button from "../../ui/Button";

const SearchBar = ({ setIsSearchBarShow, setIsAiSearch }) => {
  return (
    <>
      {/* <div className="fixed inset-0 top-10 blur-glass z-50" /> */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="border absolute bg-white top-14 right-0 border-strock p-5 rounded-2xl z-[100] max-w-[430px]"
      >
        <h1 className="font-bold mb-4">Categories</h1>
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-3">
            <img src="/icons/file.png" alt="file image" />
            <p className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize">
              File Management
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/icons/project.png" alt="project image" />
            <p className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize">
              Project Management
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/icons/managment.png" alt="Management image" />
            <p className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize">
              Influencer Management
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/icons/ad.png" alt="ads image" />
            <p className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize">
              Ads Management
            </p>
          </div>
        </div>
        <h1 className="font-bold mb-4">Websites</h1>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg
       shadow-sm bg-white border border-strock p-2"
            >
              <img className="w-8 h-8" src="/images/Group 7.png" alt="image" />
            </div>
            <div>
              <h1 className="font-bold text-sm mb-2">iNewsletter</h1>
              <p className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize">
                https://website.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg
       shadow-sm bg-white border border-strock p-2"
            >
              <img className="w-8 h-8" src="/images/Group 7.png" alt="image" />
            </div>
            <div>
              <h1 className="font-bold text-sm mb-2">iNewsletter</h1>
              <p className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize">
                https://website.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg
       shadow-sm bg-white border border-strock p-2"
            >
              <img className="w-8 h-8" src="/images/Group 7.png" alt="image" />
            </div>
            <div>
              <h1 className="font-bold text-sm mb-2">iNewsletter</h1>
              <p className="text-sm text-extraDarkGray font-medium whitespace-pre capitalize">
                https://website.com
              </p>
            </div>
          </div>
        </div>
        <Button
          onClick={() => {
            setIsSearchBarShow(false);
            setIsAiSearch(true);
          }}
          variant="gradient"
          className="flex w-full mt-6 justify-center items-center gap-2"
        >
          <img src="/icons/icons8-bot 1.png" alt="icons" />
          <h3>Try AI Search</h3>
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
