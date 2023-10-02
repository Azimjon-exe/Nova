import axios from "axios";
import { baseUrl } from "./baseUrl";

const authService = {
  async userLogin(user) {
    const { data } = await axios.post(`${baseUrl}/user/login`, user);
    return data;
  },
  async userRegister(user) {
    const { data } = await axios.post(`${baseUrl}/user/registration`, user);
    return data;
  },
};

export default authService;
