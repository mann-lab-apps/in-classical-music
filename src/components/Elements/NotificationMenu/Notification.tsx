import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import {
  Description,
  Image,
  Infomation,
  TextBox,
  Title,
  Wrapper,
} from './Notification.style';
import { useEffect, useState } from 'react';

type NotificationProps = {
  id: string;
  type: string;
  title: string;
  description: string;
  createdAt: string;
  image: string;
  region: string;
  isChecked: boolean;
};

export const Notification = ({
  id,
  type,
  title,
  description,
  createdAt,
  image,
  region,
  isChecked,
}: NotificationProps) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    if (type === 'chat') {
      navigate(`/chats/${id}`);
    }
  };

  useEffect(() => {
    if (type === 'chat') {
      setDisplayedTitle(`${title}님이 메세지를 보냈습니다`);
    }
  }, []);
  return (
    <Button
      onClick={handleClick}
      variant={isChecked ? 'surface' : 'primaryContainer'}
    >
      <Wrapper>
        <Image src={image} />
        <TextBox>
          <Title>{displayedTitle}</Title>
          <Description>{description}</Description>
          <Infomation>{`${region} ・ ${createdAt}`}</Infomation>
        </TextBox>
      </Wrapper>
    </Button>
  );
};
