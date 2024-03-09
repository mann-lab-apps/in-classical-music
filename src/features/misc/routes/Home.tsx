import { Postlist } from '@/features/posts/components/Postlist';
import { Button, Tooltip } from '@/components/Elements';

import { FaPen } from 'react-icons/fa';
import juniorVolinist from '@/assets/images/junior-violinist.jpg';
import { useNavigate } from 'react-router-dom';
import { FloatingButtonWrapper } from './Home.style';

type HomeProps = {
  auth: any;
};

export const Home = ({ auth }: HomeProps) => {
  const navigate = useNavigate();
  const handleClickFloatingButton = () => {
    navigate('/posts/write');
  };
  return (
    <>
      <Postlist posts={posts} />
      <FloatingButtonWrapper>
        {auth ? (
          <Button
            onClick={handleClickFloatingButton}
            startIcon={<FaPen />}
            variant="primary"
            padding="20px"
            borderRadius="50%"
          ></Button>
        ) : (
          <Tooltip text="로그인 후 이용가능합니다">
            <Button
              startIcon={<FaPen />}
              variant="primary"
              padding="20px"
              borderRadius="50%"
            ></Button>
          </Tooltip>
        )}
      </FloatingButtonWrapper>
    </>
  );
};

const posts = [
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
  {
    id: '1',
    title: '상도동 기타 레슨샘 구합니다',
    image: juniorVolinist,
    region: '서울특별시 동작구 상도동',
    createdAt: '10분 전',
    tags: ['기타', '아마추어'],
    category: 'lesson',
  },
];
