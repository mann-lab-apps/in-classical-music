import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px;
`;

export const SelectedRegions = styled.div`
  margin-bottom: 15px;
  border: ${(props) =>
    `1px solid ${props.theme.colors.schemes.light.outlineVariant}`};
  border-radius: 5px;
  padding: 10px;
`;

export const BoxTitle = styled.h4``;

export const SelectedRegion = styled.span`
  display: flex;
  align-items: center;
`;

export const Description = styled.p``;
