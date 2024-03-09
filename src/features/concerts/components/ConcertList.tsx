import { Empty } from '@/features/misc';
import { ConcertCard } from './ConcertCard';
import { Wrapper } from './ConcertList.style';
import juniorVolinist from '@/assets/images/junior-violinist.jpg';

export const ConcertList = () => {
  return (
    <Wrapper>
      {concerts.length ? (
        concerts.map((concert, i) => (
          <ConcertCard
            key={i}
            id={concert.id}
            title={concert.title}
            startDate={concert.startDate}
            endDate={concert.endDate}
            place={concert.place}
            image={concert.image}
            tags={concert.tags}
          />
        ))
      ) : (
        <>
          <Empty phrase={'게시된 연주회가 없습니다'} />
        </>
      )}
    </Wrapper>
  );
};

const emptyConcerts = [];

const concerts = [
  {
    id: '1',
    title:
      '김재만 작곡발표회 김재만 작곡발표회 김재만 작곡발표회 김재만 작곡발표회 김재만 작곡발표회',
    startDate: '2024-03-05',
    endDate: '2024-03-05',
    place: '서울 예술의전당',
    tags: ['기타', '작곡'],
    image: juniorVolinist,
  },
  {
    id: '2',
    title: '김재만 작곡발표회',
    startDate: '2024-03-05',
    endDate: '2024-03-06',
    place: '서울 예술의전당',
    tags: ['기타', '작곡'],
    image: juniorVolinist,
  },
  {
    id: '3',
    title: '김재만 작곡발표회',
    startDate: '2024-03-05',
    endDate: '2024-03-06',
    place: '서울 예술의전당',
    tags: [],
    image: juniorVolinist,
  },
];
