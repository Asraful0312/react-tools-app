import ToolDetails from "../components/submit tool/ToolDetails";
import ToolPreview from "../components/submit tool/ToolPreview";

const SubmitTool = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full gap-10 my-16 lg:gap-20 px-10 xl:px-24 2xl:px-40">
      <div className="w-full lg:w-[65%] mb-10">
        <ToolDetails />
      </div>
      <div className="w-full lg:w-[35%]">
        <ToolPreview />
      </div>
    </section>
  );
};

export default SubmitTool;
