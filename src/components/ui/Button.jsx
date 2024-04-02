import { cva } from "class-variance-authority";
import cn from "../../utils/cn";
import { Link } from "react-router-dom";

const Button = ({ to, className, variant, size, ...rest }) => {
  return (
    <>
      {to ? (
        <Link
          {...rest}
          to={to}
          className={cn(buttonVariants({ variant, size }), className)}
        />
      ) : (
        <button
          {...rest}
          className={cn(buttonVariants({ variant, size }), className)}
        />
      )}
    </>
  );
};

const buttonVariants = cva(
  "rounded-[44px] transition-all duration-300 border border-transparent font-medium px-6 py-3 font-clash-display transition-all duration-200 whitespace-nowrap ",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white ",
        orange: "bg-accentOrange text-white ",
        secondry: "bg-secondry text-black border border-black",
        gradient: "bg-gradient-1 text-white ",
      },
      size: {
        small: "px-6 py-3",
        medium: "py-5 px-12 text-xl",
        large: "py-7 px-16 text-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  }
);

export default Button;
