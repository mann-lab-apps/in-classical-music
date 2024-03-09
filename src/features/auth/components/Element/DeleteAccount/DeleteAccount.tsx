import { Button } from '@/components/Elements';
import { ConfirmationDialog } from '@/components/Elements/ConfirmationDialog/ConfirmationDialog';
import { deleteAccount } from '@/features/auth/api/deleteAccount';

export const DeleteAccount = () => {
  const handleClickDeleteAccount = () => {
    deleteAccount();
  };
  return (
    <ConfirmationDialog
      triggerButton={<Button padding="5px">회원탈퇴</Button>}
      description="정말 회원탈퇴 하시겠습니까?"
      confirmationButton={
        <Button
          variant="primary"
          padding="5px"
          onClick={handleClickDeleteAccount}
        >
          회원탈퇴
        </Button>
      }
    />
  );
};
