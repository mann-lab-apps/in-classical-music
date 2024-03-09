import { StackedLayout } from '@/components/Layout';
import { ProfileDetail } from '../components/ProfileDetail';
import { ProfileLinksMenu } from '../components/ProfileLinksMenu';
import { useEffect, useState } from 'react';
import { Button } from '@/components/Elements';
import { FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const [isMine, setIsMine] = useState<Boolean>(true);

  useEffect(() => {}, []);

  const navigate = useNavigate();

  const handleClickFloatingButton = () => {
    navigate('/users/profile/edit');
  };
  return (
    <StackedLayout
      title="프로필 상세보기"
      headerRightItem={<ProfileLinksMenu />}
    >
      <ProfileDetail />
      <Button
        startIcon={<FaPen />}
        variant="primary"
        padding="20px"
        borderRadius="50%"
        onClick={handleClickFloatingButton}
      ></Button>
    </StackedLayout>
  );
};
