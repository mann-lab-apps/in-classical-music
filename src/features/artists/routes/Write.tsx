import { StackedLayout } from '@/components/Layout';
import { ArtistProfileForm } from '../components';
import { Button } from '@/components/Elements';

export const Write = () => {
  return (
    <StackedLayout
      title="아티스트 프로필 작성"
      headerRightItem={
        <Button type="submit" form="artistProfile" padding="5px">
          작성완료
        </Button>
      }
    >
      <ArtistProfileForm id="artistProfile" />
    </StackedLayout>
  );
};
