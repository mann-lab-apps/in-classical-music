import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 15px;
`;

export const MyMessage = styled.div`
  align-self: end;

  display: flex;
  align-items: end;
  gap: 5px;
`;

export const MyMessageContent = styled.p`
  max-width: 50vw;

  border-radius: 15px 0 15px 15px;
  padding: 15px;

  background-color: ${(props) =>
    props.theme.colors.schemes.light.primaryContainer};

  color: ${(props) => props.theme.colors.schemes.light.onPrimaryContainer};
  font-size: ${(props) => props.theme.typography.sizes.body.large.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.large.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.large.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.large.letterSpacing};
  white-space: pre-wrap;
`;

export const PartnerMessage = styled.div`
  align-self: start;

  display: flex;
  align-items: end;
  gap: 5px;
`;

export const PartnerMessageContent = styled.p`
  max-width: 50vw;
  border-radius: 0 15px 15px 15px;
  padding: 15px;

  color: ${(props) => props.theme.colors.schemes.light.onSecondaryFixedDim};
  background-color: ${(props) =>
    props.theme.colors.schemes.light.secondaryFixedDim};

  font-size: ${(props) => props.theme.typography.sizes.body.large.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.large.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.large.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.large.letterSpacing};
  white-space: pre-wrap;
`;

export const MessageCreatedAt = styled.span`
  color: ${(props) => props.theme.colors.schemes.light.secondary};
  font-size: ${(props) => props.theme.typography.sizes.body.small.fontSize};
  font-weight: ${(props) => props.theme.typography.sizes.body.small.fontWeight};
  line-height: ${(props) => props.theme.typography.sizes.body.small.lineHeight};
  letter-spacing: ${(props) =>
    props.theme.typography.sizes.body.small.letterSpacing};
`;
