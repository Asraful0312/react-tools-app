import cn from "../../utils/cn";

const TextInput = ({ label, className, forgotpass, ...rest }) => {
  return (
    <div
      className={cn(
        "h-14 flex items-center border relative border-strock rounded-[36px] w-[280px] justify-between gap-5 px-6",
        className
      )}
    >
      <div className="flex items-center justify-between mt-4">
        <input
          {...rest}
          type="text"
          placeholder=""
          id="input"
          className="text-input"
        />
        <label className="input-label " htmlFor="input">
          {label}
        </label>
      </div>
      {forgotpass && (
        <p className="font-medium text-accentBlue whitespace-nowrap">
          Forgot Password?
        </p>
      )}
    </div>
  );
};

export default TextInput;
