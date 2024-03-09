import { Button } from '@/components/Elements';
import { StackedLayout } from '@/components/Layout';
import { EditProfileForm } from '../components';

export const EditProfile = () => {
  return (
    <StackedLayout
      title="프로필 수정"
      headerRightItem={<Button padding="5px">저장</Button>}
    >
      <EditProfileForm />
    </StackedLayout>
  );
};
