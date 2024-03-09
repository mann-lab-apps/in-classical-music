import { supabase } from '@/libraries/supabase';

type resetPasswordCredentialDTO = {
  email: string;
};

export const resetPassword = ({ email }: resetPasswordCredentialDTO) => {
  return supabase.auth.resetPasswordForEmail(email);
};
