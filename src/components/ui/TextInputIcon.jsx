import cn from "../../utils/cn";

const TextInputIcon = ({ className, ...rest }) => {
  return (
    <form
      className={cn(
        `flex items-center justify-between border border-strock rounded-[36px] w-full bg-white px-5 py-1 md:py-2`,
        className
      )}
    >
      <input {...rest} type="text" className={"w-full outline-none"} />
      <img
        className="cursor-pointer"
        src="/icons/Frame 8.png"
        alt="search icon"
      />
    </form>
  );
};

export default TextInputIcon;
