import { Link } from '@/components/Elements';
import {
  Image,
  SubInformation,
  Tag,
  Tags,
  TextBox,
  Title,
  Wrapper,
} from './ConcertCard.style';

export type ConcertCardProps = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  place: string;
  tags: string[];
  image?: string;
};

export const ConcertCard = ({
  id,
  title,
  image = '',
  startDate,
  endDate,
  place,
  tags,
}: ConcertCardProps) => {
  return (
    <Link to={`/concerts/${id}`} textDecoration="none">
      <Wrapper>
        <Image src={image} />
        <TextBox>
          <Title>{title}</Title>
          <SubInformation>
            {startDate === endDate
              ? `${startDate} ・ ${place}`
              : `${startDate} ~ ${endDate} ・ ${place}`}
          </SubInformation>
          <Tags>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Tags>
        </TextBox>
      </Wrapper>
    </Link>
  );
};
