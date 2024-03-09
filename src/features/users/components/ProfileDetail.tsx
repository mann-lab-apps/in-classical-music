import {
  Image,
  Wrapper,
  Information,
  Label,
  Tags,
  Tag,
} from './ProfileDetail.style';
import juniorVolinist from '@/assets/images/junior-violinist.jpg';

export const ProfileDetail = () => {
  const { username, email, image, phoneNumber, tags } = user;
  return (
    <Wrapper>
      <Image src={image} />
      <Information>
        <Label>이름</Label>
        {username}
      </Information>
      <Information>
        <Label>이메일</Label>
        {email}
      </Information>
      <Information>
        <Label>연락처</Label>
        {phoneNumber}
      </Information>
      <Tags>
        <Label>관심태그</Label>
        {tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </Tags>
    </Wrapper>
  );
};

const user = {
  id: '1',
  username: '만마에',
  email: 'daga4242@gmail.com',
  image: juniorVolinist,
  phoneNumber: '010-7430-0220',
  tags: ['기타', '작곡', '즉흥연주'],
  artistId: '1',
};
