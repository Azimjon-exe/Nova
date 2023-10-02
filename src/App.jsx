import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const content = useRoutes(routes);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/events");
    } else {
      navigate("/login");
    }
  }, []);
  return <>{content}</>;
}

export default App;
