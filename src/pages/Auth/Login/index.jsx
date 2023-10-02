import { Button, Card, Flex, TextField } from "@radix-ui/themes";
import logo from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import authService from "../../../services/authServices";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pasword, setPasword] = useState("");

  const onSubmit = () => {
    authService.userLogin({ username, pasword }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500 ">
      <Card variant="surface" className="w-[20%] ">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className=" h-[100px] mb-5" />
        </div>
        <Flex direction="column" gap="3">
          <TextField.Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField.Input
            placeholder="Password"
            type="password"
            value={pasword}
            onChange={(e) => setPasword(e.target.value)}
          />
          <Button onClick={onSubmit}>SignIn</Button>
        </Flex>
        <div className="flex justify-center items-center mt-2">
          <p>Don`t have an account? </p>
          <Link className="text-blue-700 pl-1" to="/signup">
            Sign Up
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
