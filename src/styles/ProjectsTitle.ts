import styled from 'styled-components';

type ProjectsTitleProps = {
  loaded: boolean;
};

export const ProjectsTitle = styled.h2<ProjectsTitleProps>`
  margin-bottom: 1rem;
  transform: translateX(100vw);
  opacity: 0;
  transition: transform 1s cubic-bezier(0, 0.9, 0.27, 0.99), opacity 1.5s;
  ${({ loaded }) => (loaded ? 'transform: translateX(0vw); opacity: 1;' : '')}
`;
