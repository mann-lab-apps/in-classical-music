import { Button, Slider } from '@/components/Elements';
import {
  Image,
  Infomations,
  Post,
  PostingInfomations,
  Tag,
  Tags,
  Title,
  Wrapper,
} from './Postlist.style';
import { useNavigate } from 'react-router-dom';
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import { Empty } from '@/features/misc';

type PostlistProps = {
  posts: any[];
};

export const Postlist = ({ posts }: PostlistProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {posts.length ? (
        <Slider direction="column" gap="0">
          {posts.map((post, i) => (
            <Post key={i} onClick={() => navigate(`/posts/id=${post.id}`)}>
              <Image src={post.image} />
              <Infomations>
                <Title>{post.title}</Title>
                <PostingInfomations>{`${post.region} ・ ${post.createdAt}`}</PostingInfomations>
                <Tags>
                  {post.tags.map(
                    (
                      tag:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | null
                        | undefined,
                      i: Key | null | undefined
                    ) => (
                      <Tag key={i}>{tag}</Tag>
                    )
                  )}
                </Tags>
              </Infomations>
            </Post>
          ))}
        </Slider>
      ) : (
        <Empty
          phrase="등록된 게시글이 없습니다"
          actionButton={
            <Button
              onClick={() => navigate('write')}
              variant="primary"
              padding="10px"
            >
              새 글 등록하기
            </Button>
          }
        />
      )}
    </Wrapper>
  );
};
