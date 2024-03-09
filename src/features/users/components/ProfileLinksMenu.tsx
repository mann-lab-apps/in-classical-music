import { Button, Link, Menu } from '@/components/Elements';
import { IoMdMore } from 'react-icons/io';
import { Wrapper } from './ProfileLinksMenu.style';

export const ProfileLinksMenu = () => {
  const id = '1';
  const artistId = '1';
  return (
    <Menu
      triggerButton={
        <Button startIcon={<IoMdMore size="20" />} padding="5px" />
      }
      isLeft={false}
      contents={
        <Wrapper>
          <Link to={`/chats/${id}`} textDecoration="none">
            <Button padding="5px">채팅하기</Button>
          </Link>
          {artistId && (
            <Link to={`/artist/${artistId}`} textDecoration="none">
              <Button padding="5px">아티스트 프로필</Button>
            </Link>
          )}
        </Wrapper>
      }
    />
  );
};
