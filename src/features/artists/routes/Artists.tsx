import { ArtistsFloatingButton } from '../components';
import { Postlist } from '@/features/posts';

import juniorVolinist from '@/assets/images/junior-violinist.jpg';

type ArtistsProps = {
  auth: any;
};

export const Artists = ({ auth }: ArtistsProps) => {
  return (
    <>
      <Postlist posts={posts} />
      <ArtistsFloatingButton auth={auth} />
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
