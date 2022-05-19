import styled from 'styled-components';

export const LinkButton = styled.button`
  margin: 0.25rem 0;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    &::after {
      content: '   •';
    }
  }
`;
