import { Button } from '@/components/Elements';
import { ConfirmationDialog } from '@/components/Elements/ConfirmationDialog/ConfirmationDialog';

export const BlockUserDialog = () => {
  const handleClickConfirmation = () => {};
  return (
    <ConfirmationDialog
      triggerButton={<Button padding="10px">차단하기</Button>}
      description={
        '대화 상대를 차단하면 상대가 보낸\n메세지를 확인할 수 없습니다\n\n정말 차단하시겠습니까?'
      }
      confirmationButton={
        <Button variant="error" onClick={handleClickConfirmation}>
          차단하기
        </Button>
      }
    />
  );
};
