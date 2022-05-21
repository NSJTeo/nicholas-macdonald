import styled from 'styled-components';

interface AppMaskProps {
  loaded: boolean;
}

export const AppMask = styled.div<AppMaskProps>`
  border-right: 2rem solid black;
  position: absolute;
  height: 500vh;
  width: 100%;
  background: white;
  z-index: 3;
  transition: 1s;
  ${({ loaded }) => (loaded ? 'transform: translateX(-100vw);' : '')}
`;
