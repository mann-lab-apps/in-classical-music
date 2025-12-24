import { axios } from "@/libraries/axios";
import { supabase } from "@/libraries/supabase";

type JoinProps = {
  name: string;
  email: string;
  password: string;
};

export const join = ({ name, email, password }: JoinProps) => {
  return axios.post("/api/auth/join", { name, email, password });
};
