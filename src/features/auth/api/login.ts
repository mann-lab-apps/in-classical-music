import { axios } from "@/libraries/axios";
import { supabase } from "@/libraries/supabase";

type loginCredentialsDTO = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = ({
  email,
  password,
}: loginCredentialsDTO) => {
  return axios.post("/api/auth/login", { username: email, password });
};
