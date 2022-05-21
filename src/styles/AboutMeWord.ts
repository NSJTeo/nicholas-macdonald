import styled from 'styled-components';

interface AboutMeWordProps {
  index: number;
  loaded: boolean;
}

export const AboutMeWord = styled.span<AboutMeWordProps>`
  opacity: 0;
  position: relative;
  transition: top 1s;
  ${({ index }) => `transition: opacity 1s ${index * 75}ms;`}
  ${({ loaded }) => (loaded ? 'opacity: 1;' : '')}
`;
