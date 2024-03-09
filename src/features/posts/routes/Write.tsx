import { StackedLayout } from '@/components/Layout';
import { PostForm } from '../components';
import { Button } from '@/components/Elements';

export const Write = () => {
  const formId = 'write';
  return (
    <StackedLayout
      title="지역 소식 작성하기"
      headerRightItem={
        <Button form={formId} type="submit" padding="5px">
          작성완료
        </Button>
      }
    >
      <PostForm id={formId} />
    </StackedLayout>
  );
};
