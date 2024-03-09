import styled from 'styled-components';

type WrapperProps = {
  backgroundColor: string;
};

export const Wrapper = styled.section<WrapperProps>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px 150px;
  padding-top: 30px;
  background-color: ${(props) =>
    props.theme.colors.schemes.light[props.backgroundColor]};
`;

export const TextBox = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 30px;
`;

export const Title = styled.h4`
  white-space: pre-wrap;
`;

export const Description = styled.p`
  white-space: pre-wrap;
`;

export const Image = styled.img`
  width: 30%;
  aspect-ratio: 1/1;

  max-width: 500px;
  max-height: 500px;

  min-width: 300px;
  min-height: 300px;

  background-color: transparent;
  object-fit: contain;
  object-position: center bottom;
`;
