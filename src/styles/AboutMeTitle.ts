import styled from 'styled-components';
import { keyframes } from 'styled-components';

const blink = keyframes`
  50% {
    opacity: 0
  }
`;

export const AboutMeTitle = styled.h1`
  color: white;
  margin-bottom: 2rem;
  &::after {
    content: '|';
    animation: ${blink} 1s step-start infinite;
  }
`;
