import { axios } from "@/libraries/axios";

export const gerUserInfo = () => {
  return axios.get("/api/auth/user");
};
