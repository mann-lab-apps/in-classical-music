import { Button } from '@/components/Elements';
import { ConfirmationDialog } from '@/components/Elements/ConfirmationDialog/ConfirmationDialog';

export const ExitChatDialog = () => {
  const handleClickConfirmation = () => {};
  return (
    <ConfirmationDialog
      triggerButton={<Button padding="10px">나가기</Button>}
      description={
        '채팅에서 나가면 메세지를 더 이상 볼 수 없습니다\n정말 나가시겠습니까?'
      }
      confirmationButton={
        <Button variant="error" onClick={handleClickConfirmation}>
          나가기
        </Button>
      }
    />
  );
};
