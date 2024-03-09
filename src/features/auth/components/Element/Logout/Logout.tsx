import { Button } from '@/components/Elements';
import { ConfirmationDialog } from '@/components/Elements/ConfirmationDialog/ConfirmationDialog';
import { logout } from '@/features/auth/api';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();
  const handleClickLogout = async () => {
    console.log('click');
    const { error } = await logout();
    if (error) {
      return console.error(error);
    }
    navigate('/');
  };
  return (
    <ConfirmationDialog
      triggerButton={<Button padding="15px">로그아웃</Button>}
      description="정말 로그아웃 하시겠습니까?"
      confirmationButton={
        <Button variant="primary" padding="5px" onClick={handleClickLogout}>
          로그아웃
        </Button>
      }
    />
  );
};
