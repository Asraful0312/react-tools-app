import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full">
      <div className="w-full pl-5 lg:pl-12 md:w-[65%] pt-14">
        <h1 className="text-4xl leading-[50px] font-bold">
          Discover <span className="text-gradient-1">marketing tools</span> that{" "}
          <br /> supercharge your growth
        </h1>
        <p className="line-clamp-2 my-6">
          Browse through hundreds of unique tools to boost your marketing &
          startup. Start by clicking Categories below to pick tools in different
          marketing topics.
        </p>
        <div className="flex items-center gap-6 flex-wrap mb-5">
          <Button variant="primary">View Latest Tools</Button>
          <Button variant="secondry">Trending tools</Button>
        </div>
      </div>
      <div className="w-full flex justify-end h-[250px] md:h-[368px] md:w-[35%]">
        <img src="/images/mike.png" alt="mike photo" />
      </div>
    </div>
  );
};

export default Hero;
