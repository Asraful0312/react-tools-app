import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";

const Login = () => {
  return (
    <section className="flex items-center justify-center   my-10 md:my-32 px-6">
      <form className="max-w-[467px]">
        <h1 className="text-4xl font-bold mb-6 text-center">Sign In</h1>
        <p className="font-medium text-extraDarkGray text-center mb-16">
          Browse through hundreds of unique tools <br /> to boost your marketing
          & startup.{" "}
        </p>
        <TextInput forgotpass label="Password" className="w-full" />
        <TextInput label="email" className="w-full mt-6" />
        <Button variant="primary" className="w-full mt-12">
          Sign In
        </Button>
        <Button variant="secondry" className="w-full mt-12 mb-10">
          Sign In with Google
        </Button>
        <Link to="/signup">
          <h1 className="text-accentBlue font-bold text-center">
            Create new Account
          </h1>
        </Link>
      </form>
    </section>
  );
};

export default Login;
