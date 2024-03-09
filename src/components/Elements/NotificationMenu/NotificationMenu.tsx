import { FaBell } from 'react-icons/fa';
import { Button } from '../Button';
import { Menu } from '../Menu';
import { Notifications } from './NotificationMenu.style';
import { Notification } from './Notification';

import juniorVolinist from '@/assets/images/junior-violinist.jpg';

export const NotificationMenu = () => {
  return (
    <Menu
      triggerButton={
        <Button padding="5px" startIcon={<FaBell size="20" />}></Button>
      }
      isLeft={false}
      contents={
        <Notifications>
          {notifications.map((notification, i) => (
            <Notification
              id={notification.id}
              type={notification.type}
              title={notification.title}
              description={notification.description}
              createdAt={notification.createdAt}
              image={notification.image}
              region={notification.region}
              isChecked={notification.isChecked}
            ></Notification>
          ))}
        </Notifications>
      }
    />
  );
};

const notifications = [
  {
    id: '1',
    type: 'chat',
    title: '오라형',
    description: '안녕하세요, 반갑습니다',
    createdAt: '1시간 전',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    isChecked: true,
  },
  {
    id: '1',
    type: 'chat',
    title: '오라형',
    description: '안녕하세요, 반갑습니다',
    createdAt: '1시간 전',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    isChecked: false,
  },
  {
    id: '1',
    type: 'chat',
    title: '오라형',
    description: '안녕하세요, 반갑습니다',
    createdAt: '1시간 전',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    isChecked: true,
  },
  {
    id: '1',
    type: 'chat',
    title: '오라형',
    description: '안녕하세요, 반갑습니다',
    createdAt: '1시간 전',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    isChecked: false,
  },
];
