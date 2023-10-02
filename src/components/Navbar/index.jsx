import { NavLink, useNavigate } from "react-router-dom";
import "./main.css";
import { Button, Dialog, Flex } from "@radix-ui/themes";

const Navbar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };
  return (
    <nav className="bg-blue-500 text-white flex align-middle justify-between px-20 py-5">
      <div className="title text-2xl font-bold">NovaTechLabs</div>
      <ul className=" flex align-middle">
        <li className="pl-3 text-[18px] font-semibold">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/events"
          >
            Events
          </NavLink>
        </li>
        <li className="pl-3 text-[18px] font-semibold">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/reservations"
          >
            Reservations
          </NavLink>
        </li>
        <li className="pl-3 text-[18px] font-semibold text-[#fd5c5c] cursor-pointer">
          <Dialog.Root>
            <Dialog.Trigger>
              <p>Log out</p>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
              <Dialog.Title className=" text-center">
                Do you really want to log out?
              </Dialog.Title>

              <Flex gap="3" mt="4" justify="center">
                <Dialog.Close>
                  <Button color="green">NO</Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button color="red" onClick={logOut}>
                    YES
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
