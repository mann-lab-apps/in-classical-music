import {
  Description,
  Image,
  TextBox,
  Title,
  Wrapper,
} from './GuideSection.style';

type GuideSectionProps = {
  title: string;
  description: string;
  buttons: React.ReactNode;
  image: string;
  textPosition?: string;
  backgroundColor?: string;
};

export const GuideSection = ({
  title,
  description,
  buttons,
  image,
  textPosition = 'left',
  backgroundColor = 'surface',
}: GuideSectionProps) => {
  if (textPosition === 'left') {
    return (
      <Wrapper backgroundColor={backgroundColor}>
        <TextBox>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {buttons}
        </TextBox>
        <Image src={image} />
      </Wrapper>
    );
  }
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Image src={image} />
      <TextBox>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {buttons}
      </TextBox>
    </Wrapper>
  );
};
