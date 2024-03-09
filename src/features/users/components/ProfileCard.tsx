import { Link } from '@/components/Elements';
import {
  Email,
  Image,
  Information,
  Username,
  Wrapper,
} from './ProfileCard.style';

import defaultImage from '@/assets/images/junior-violinist.jpg';

type ProfileCardProps = {
  id: string;
  image?: string;
  username: string;
  email: string;
};

export const ProfileCard = ({
  id,
  image,
  username,
  email,
}: ProfileCardProps) => {
  return (
    <Link to={`/users/profile/${id}`} textDecoration="none">
      <Wrapper>
        <Image src={image ? image : defaultImage} />
        <Information>
          <Username>{username}</Username>
          <Email>{email}</Email>
        </Information>
      </Wrapper>
    </Link>
  );
};
