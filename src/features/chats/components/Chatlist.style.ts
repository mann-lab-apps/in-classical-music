import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
`;

export const Chat = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 15px;

  background-color: ${(props) => props.theme.colors.schemes.light.surface};
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.schemes.light.surfaceContainer};
  }
`;

export const Image = styled.img`
  width: 80px;
  aspect-ratio: 1/1;
  border-radius: 50%;

  margin-right: 10px;

  object-fit: cover;
`;

export const TextBox = styled.div`
  max-width: 50vw;
`;

export const Username = styled.span`
  color: ${(props) => props.theme.colors.schemes.light.onSurface};
  font-size: ${(props) => props.theme.typography.sizes.body.large.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.large.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.large.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.large.letterSpacing};
`;

export const ChatInformation = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  color: ${(props) => props.theme.colors.schemes.light.secondary};
  font-size: ${(props) => props.theme.typography.sizes.label.medium.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.label.medium.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.label.medium.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.label.medium.letterSpacing};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const RecentMessage = styled.p`
  color: ${(props) => props.theme.colors.schemes.light.onSurface};
  font-size: ${(props) => props.theme.typography.sizes.body.large.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.large.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.large.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.large.letterSpacing};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const UnreadCount = styled.span`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  border-radius: 50%;

  background-color: ${(props) =>
    props.theme.colors.schemes.light.primaryContainer};

  color: ${(props) => props.theme.colors.schemes.light.onPrimaryContainer};
  font-size: ${(props) => props.theme.typography.sizes.label.small.fontSize};
  font-weight: ${(props) =>
    props.theme.typography.sizes.label.small.fontWeight};
  line-height: ${(props) =>
    props.theme.typography.sizes.label.small.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.label.small.letterSpacing};
`;
