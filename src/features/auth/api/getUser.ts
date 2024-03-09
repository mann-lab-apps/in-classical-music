import { supabase } from '@/libraries/supabase';

export const getUser = async () => {
  return supabase.auth.getUser();
};
