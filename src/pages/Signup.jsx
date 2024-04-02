import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";

const Signup = () => {
  return (
    <section className="flex items-center justify-center   my-10 md:my-32 px-6">
      <form className="w-[350px] md:w-[467px]">
        <h1 className="text-4xl font-bold mb-3 md:mb-6 text-center">Sign In</h1>
        <p className="font-medium text-extraDarkGray text-center mb-8 md:mb-16">
          Browse through hundreds of unique tools <br /> to boost your marketing
          & startup.{" "}
        </p>
        <div className="space-y-3 md:space-y-6">
          <TextInput label="Name" className="w-full" />
          <TextInput label="Email" className="w-full " />
          <TextInput label="Password" className="w-full " />
        </div>
        <Button variant="primary" className="w-full mt-8 md:mt-12">
          Sign up
        </Button>
        <Button
          variant="secondry"
          className="w-full mt-6 md:mt-12  mb-8 md:mb-10"
        >
          Sign up with Google
        </Button>
        <Link to="/signin">
          <h1 className="text-accentBlue font-bold text-center">
            Already have account ? Login
          </h1>
        </Link>
      </form>
    </section>
  );
};

export default Signup;
