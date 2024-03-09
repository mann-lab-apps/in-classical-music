import { SUPABASE_API_KEY, SUPABASE_URL } from '@/configurations';
import { storage } from '@/utils/storage';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  SUPABASE_URL as string,
  SUPABASE_API_KEY as string,
  {
    auth: {
      storage: {
        getItem: storage.getValue,
        setItem: storage.setValue,
        removeItem: storage.clearValue,
      },
    },
  }
);
