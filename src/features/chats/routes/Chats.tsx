import { Chatlist } from '../components';

import juniorVolinist from '@/assets/images/junior-violinist.jpg';

export const Chats = () => {
  return (
    <>
      <Chatlist chats={chats} />
    </>
  );
};

const chats = [
  {
    id: '',
    unreadCount: 1,
    user: {
      id: '1',
      username: '만마에',
      image: juniorVolinist,
      region: '노량진동',
    },
    recentMessage: {
      createdAt: '1시간 전',
      content:
        '안녕하세요 ~ 안녕하세요 ~ 안녕하세요 ~ 안녕하세요 ~ 안녕하세요 ~ 안녕하세요 ~ 안녕하세요 ~ 안녕하세요 ~ ',
    },
  },
];
