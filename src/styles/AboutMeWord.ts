import styled from 'styled-components';

interface AboutMeWordProps {
  index: number;
  loaded: boolean;
}

export const AboutMeWord = styled.span<AboutMeWordProps>`
  opacity: 0;
  position: relative;
  top: -10rem;
  transition: top 1s;
  ${({ index }) =>
    `transition: top 300ms ${
      index * 50
    }ms cubic-bezier(.17,.67,.46,.74), opacity 1s ${index * 50}ms;`}
  ${({ loaded }) => (loaded ? 'top: 0rem; opacity: 1;' : '')}
`;
