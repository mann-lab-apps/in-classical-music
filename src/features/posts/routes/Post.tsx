import { StackedLayout } from '@/components/Layout';
import juniorVolinist from '@/assets/images/junior-violinist.jpg';
import {
  AboutPost,
  Description,
  Image,
  PostInformation,
  Tag,
  Tags,
  Wrapper,
} from './Post.style';
import { ProfileCard } from '@/features/users';
import { PostActionsMenu } from '../components';

export const Post = () => {
  const {
    title,
    description,
    images,
    region,
    createdAt,
    views,
    tags,
    category,
  } = post;
  const { username, image, email } = user;
  return (
    <StackedLayout title={title} headerRightItem={<PostActionsMenu />}>
      <Wrapper>
        <Image src={images[0]} />
        <ProfileCard
          id={user.id}
          username={username}
          image={image}
          email={email}
        />
        <PostInformation>
          <Tags>
            {tags.map((tag, i) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <AboutPost>{`${createdAt} ・ 조회 수 ${views}`}</AboutPost>
          <Description>{description}</Description>
        </PostInformation>
      </Wrapper>
    </StackedLayout>
  );
};

const post = {
  id: '1',
  title: '상도동 기타 레슨샘 구합니다',
  description: '기타 샘 구합니다\n남자분이면 좋을 것 같아요 :)',
  images: [juniorVolinist, juniorVolinist, juniorVolinist, juniorVolinist],
  region: '서울특별시 동작구 상도동',
  createdAt: '10분 전',
  views: 70,
  tags: ['기타', '아마추어'],
  category: 'lesson',
};

const user = {
  id: '1',
  username: '김재만',
  image: juniorVolinist,
  email: 'daga4242@gmail.com',
};
