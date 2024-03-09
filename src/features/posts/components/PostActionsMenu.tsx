import { Button, Menu } from '@/components/Elements';
import { Wrapper } from './PostActionsMenu.style';
import { IoMdMore } from 'react-icons/io';

export const PostActionsMenu = () => {
  return (
    <Menu
      triggerButton={
        <Button startIcon={<IoMdMore size="20" />} padding="5px" />
      }
      contents={
        <Wrapper>
          <Button padding="10px">채팅하기</Button>
          <Button padding="10px">채팅하기</Button>
        </Wrapper>
      }
      isLeft={false}
    />
  );
};
