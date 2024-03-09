import { useNavigate } from 'react-router-dom';
import { ConcertList } from '../components';
import { Wrapper } from './Concerts.style';

export const Concerts = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ConcertList />
    </Wrapper>
  );
};
