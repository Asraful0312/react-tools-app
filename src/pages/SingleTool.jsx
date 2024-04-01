import Details from "../components/single tool/details";
import Features from "../components/single tool/Features";

const SingleTool = () => {
  return (
    <section className="px-5 lg:px-12 my-16 flex flex-col gap-5  md:flex-row md:gap-32 2xl:gap-48">
      <div className="w-full mb-10 px-5 md:px-0 md:w-[70%]">
        <Details />
      </div>
      <div className="w-full px-5 md:px-0 md:w-[30%]">
        <Features />
      </div>
    </section>
  );
};

export default SingleTool;
