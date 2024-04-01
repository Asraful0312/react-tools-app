/* eslint-disable react/no-unescaped-entities */
import Button from "../components/ui/Button";

const SearchResult = () => {
  return (
    <section className="max-w-[620px] mx-auto flex justify-center py-12 ">
      <div className="w-full">
        <h1 className="font-bold text-3xl mb-7">Search Results</h1>
        <div className="border-t border-strock flex flex-col justify-between gap-10 ">
          <div className="mt-7 px-5 pb-10 space-y-10 h-[500px] overflow-y-scroll">
            {/* user message */}
            <div className="flex items-center justify-end">
              <div className="bg-gradient-2 p-3 rounded-2xl flex gap-10">
                <p className="text-white text-sm font-medium">
                  Best email newsletter for a startup company
                </p>
                <div className="bg-white rounded w-6 h-6">
                  <img src="/icons/user.png" alt="user icon" />
                </div>
              </div>
            </div>
            {/* bot message */}
            <div className="flex items-center justify-start max-w-[520px] ">
              <div className="bg-white shadow-md border-strock p-3 rounded-2xl flex ">
                <div className="w-[10%]">
                  <div className="bg-white rounded w-6 h-6 ">
                    <img className="" src="/icons/bot.png" alt="user icon" />
                  </div>
                </div>
                <p className="w-[90%] text-extraDarkGray text-sm font-medium">
                  To recommend the best email newsletter tool for a startup
                  company, I will filter the marketing tools from my knowledge
                  source specifically focusing on those categorized under "Email
                  Marketing". I'll then consider tools with features suitable
                  for startups, such as user-friendliness, cost-effectiveness,
                  and scalability. Let me identify the most appropriate options
                  for you.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start max-w-[520px] ">
              <div className="bg-white shadow-md border-strock p-3 rounded-2xl flex ">
                <div className="w-[10%]">
                  <div className="bg-white rounded w-6 h-6 ">
                    <img className="" src="/icons/bot.png" alt="user icon" />
                  </div>
                </div>
                <p className="w-[90%] text-extraDarkGray text-sm font-medium">
                  Here's a list of sites that will help with Email marketing
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md border-strock p-3 rounded-2xl flex flex-wrap gap-4 max-w-[360px]">
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
            <div className="bg-white shadow-md border-strock p-3 rounded-2xl flex flex-wrap gap-4 max-w-[360px]">
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
                <Button className="border none bg-transparent px-2 text-darkBlue">
                  Deal
                </Button>
              </div>
            </div>
            <div className="bg-white shadow-md border-strock p-3 rounded-2xl flex flex-wrap gap-4 max-w-[360px]">
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
          </div>

          <form
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
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
