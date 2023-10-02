import { Outlet } from "react-router-dom";
const Auth = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default Auth;
