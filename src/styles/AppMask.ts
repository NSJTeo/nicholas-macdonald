import styled from 'styled-components';

interface AppMaskProps {
  loaded: boolean;
}

export const AppMask = styled.div<AppMaskProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  z-index: 3;
  transition: 1s;
  ${({ loaded }) => (loaded ? 'transform: translateX(-100vw);' : '')}
`;
