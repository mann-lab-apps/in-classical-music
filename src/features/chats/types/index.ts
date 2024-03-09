import { BaseEntity } from '@/types';

export type Message = {
  content: string;
  user: {
    id: string;
  };
} & BaseEntity;
