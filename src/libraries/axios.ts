import { ADDRESS_API_URL } from '@/configurations';
import Axios from 'axios';

export const addressRequest = Axios.create({
  baseURL: ADDRESS_API_URL,
});
