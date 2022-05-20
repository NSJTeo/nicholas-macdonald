import styled from 'styled-components';

type ProjectTitleProps = {
  left: boolean;
  inView: boolean;
};

export const ProjectTitle = styled.h3<ProjectTitleProps>`
  margin-bottom: 0.5rem;
  opacity: 0;
  transition: transform 1s cubic-bezier(0, 0.9, 0.27, 0.99), opacity 1.5s;
  ${({ left, inView }) => {
    if (left) {
      return `
        transform: translateX(100vw);
        ${inView ? 'transform: translateX(0vw); opacity: 1;' : ''}
      `;
    }
    return `
      transform: translateX(-100vw);
      ${inView ? 'transform: translateX(0vw); opacity: 1;' : ''}
    `;
  }}
`;
