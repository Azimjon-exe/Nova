import Auth from "./Layouts/Auth.jsx";
import Main from "./Layouts/Main";
import Login from "./pages/Auth/Login/index.jsx";
import SignUp from "./pages/Auth/SignUp/index.jsx";
import EventsPage from "./pages/EventsPage/index.jsx";
import Reservations from "./pages/Reservations/index.jsx";

const mainRoutes = [
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/reservations",
    element: <Reservations />,
  },
];
const authRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];
const routes = [
  { path: "/", element: <Main></Main>, children: mainRoutes },
  { path: "/", element: <Auth></Auth>, children: authRoutes },
];
export default routes;
