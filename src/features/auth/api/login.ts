import { axios } from "@/libraries/axios";
import { supabase } from "@/libraries/supabase";

type loginCredentialsDTO = {
  email: string;
  password: string;
  fcmToken: string;
};

export const loginWithEmailAndPasswordAndfcmToken = ({
  email,
  password,
  fcmToken,
}: loginCredentialsDTO) => {
  return axios.post("/api/auth/login", { username: email, password, fcmToken });
};
