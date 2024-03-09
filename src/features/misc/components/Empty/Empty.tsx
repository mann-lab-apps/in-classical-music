import { Column, Phrase, Wrapper } from './Empty.style';

type EmptyProps = {
  phrase: string;
  actionButton?: React.ReactNode;
};

export const Empty = ({ phrase, actionButton }: EmptyProps) => {
  return (
    <Wrapper>
      <Column>
        <Phrase>{phrase}</Phrase>
      </Column>
      <Column>{actionButton}</Column>
    </Wrapper>
  );
};
