import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Outlet />
    </>
  );
};

export default Main;
