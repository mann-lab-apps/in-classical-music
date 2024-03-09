import { supabase } from '@/libraries/supabase';
import { getUser } from './getUser';

export const deleteAccount = async () => {
  const { data, error } = await getUser();
  console.log(data);
  if (error) {
    return;
  }

  if (data?.user?.id) {
    return supabase.auth.admin.deleteUser(data.user.id);
  }
};
