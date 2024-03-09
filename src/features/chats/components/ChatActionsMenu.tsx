import { Button, Menu } from '@/components/Elements';
import { IoMdMore } from 'react-icons/io';
import { Wrapper } from './ChatActionsMenu.style';
import { ExitChatDialog } from './ExitChatDialog';
import { BlockUserDialog } from './BlockUserDialog';

export const ChatActionsMenu = () => {
  return (
    <Menu
      triggerButton={
        <Button startIcon={<IoMdMore size="20" />} padding="5px" />
      }
      isLeft={false}
      closeOnClickContents={false}
      contents={
        <Wrapper>
          <BlockUserDialog />
          <ExitChatDialog />
        </Wrapper>
      }
    />
  );
};
