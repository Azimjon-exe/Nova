import { Button, Card, Flex, TextField } from "@radix-ui/themes";
import logo from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500 ">
      <Card variant="surface" className="w-[20%] ">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className=" h-[100px] mb-5" />
        </div>
        <Flex direction="column" gap="3">
          <TextField.Input placeholder="First name" />
          <TextField.Input placeholder="Last name" />
          <TextField.Input placeholder="Email" type="email" />
          <TextField.Input placeholder="Username" />
          <TextField.Input placeholder="Password" type="password" />
          <TextField.Input placeholder="Confirm Password" type="password" />
          <Button>SignUp</Button>
        </Flex>
        <div className="flex justify-center items-center mt-2">
          <p>Do you have an account? </p>
          <Link className="text-blue-700 pl-1" to="/login">
            Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
