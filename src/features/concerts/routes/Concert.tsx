import { StackedLayout } from '@/components/Layout';
import juniorVolinist from '@/assets/images/junior-violinist.jpg';
import { Image, Wrapper } from './Concert.style';

export const Concert = () => {
  const { id, title, image, tags, artist } = concert;
  return (
    <StackedLayout title={title}>
      <Wrapper>
        <Image src={image ? image : juniorVolinist} />
      </Wrapper>
    </StackedLayout>
  );
};

const concert = {
  id: '1',
  title: '김재만 작곡발표회',
  tags: ['기타', '작곡'],
  image: juniorVolinist,
  startDate: '2024-03-05',
  endDate: '2024-03-05',
  runningTime: '',
  startTime: '',
  artist: {
    id: '1',
    username: '김재만',
  },
};
