import { supabase } from '@/libraries/supabase';

export const logout = () => {
  return supabase.auth.signOut();
};
