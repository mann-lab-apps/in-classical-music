import { supabase } from '@/libraries/supabase';

type JoinProps = {
  email: string;
  password: string;
};

export const join = ({ email, password }: JoinProps) => {
  return supabase.auth.signUp({ email, password });
};
