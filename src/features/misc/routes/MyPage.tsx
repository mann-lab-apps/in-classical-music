import { Logout } from '@/features/auth';
import { Buttons, Line } from './MyPage.style';
import { ProfileCard } from '@/features/users';
import { Button, Link } from '@/components/Elements';

export const MyPage = () => {
  return (
    <>
      <ProfileCard id={user.id} username={user.username} email={user.email} />
      <Buttons>
        <Link to={`/users/${user.id}?tap=posts`} textDecoration="none">
          <Button padding="15px">내가 작성한 게시글</Button>
        </Link>
        <Line />
        <Link to={`/settings`} textDecoration="none">
          <Button padding="15px">알림 설정</Button>
        </Link>
        <Line />
        {/* <Link to="/chats" textDecoration="none">
          <Button padding="15px">채팅목록</Button>
        </Link>
        <Line /> */}
        <Logout />
        {/* <DeleteAccount /> */}
      </Buttons>
    </>
  );
};

const user = {
  id: '1',
  username: '만마에',
  email: 'daga4242@gmail.com',
};
