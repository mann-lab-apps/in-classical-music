import { StackedLayout } from '@/components/Layout';
import { Messages } from '../components/Messages';
import { ChatActionsMenu } from '../components/ChatActionsMenu';
import { ProfileCard } from '@/features/users';
import { ChatForm } from '../components';

export const Chat = () => {
  const { user, messages } = chat;
  return (
    <StackedLayout
      title="아마추어 연주자"
      headerRightItem={<ChatActionsMenu />}
    >
      <ProfileCard
        id={user.id}
        username={user.username}
        email={user.email}
        image={user.image}
      />
      <Messages messages={messages} />
      <ChatForm />
    </StackedLayout>
  );
};

const chat = {
  user: {
    id: '2',
    username: '아마추어 연주자',
    email: 'amature@inclassicalmusic.com',
    image: '',
  },
  messages: [
    {
      id: '0',
      createdAt: '1시간 전',
      content: '안녕하세요, 반갑습니다 :) 앞으로 잘 부탁드립니다',
      user: {
        id: '2',
      },
    },
    {
      id: '0',
      createdAt: '1시간 전',
      content: '저야말로 잘 부탁드립니다',
      user: {
        id: '1',
      },
    },
  ],
};
