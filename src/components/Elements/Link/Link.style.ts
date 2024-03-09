import { Link } from 'react-router-dom';
import styled from 'styled-components';

type WrapperProps = {
  type: string;
  detail: string;
  color: string;
  textDecoration: 'underline' | 'none';
};

export const Wrapper = styled(Link)<WrapperProps>`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colors.schemes.light[props.color]};
  font-size: ${(props) =>
    props.theme.typography.sizes[props.type][props.detail].fontSize};

  &:hover {
    text-decoration: ${(props) => props.textDecoration};
  }
`;
