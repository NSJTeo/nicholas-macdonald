import styled from 'styled-components';

type ProjectDescriptionProps = {
  left: boolean;
  inView: boolean;
};

export const ProjectDescription = styled.p<ProjectDescriptionProps>`
  margin-bottom: 1rem;
  width: 50%;
  opacity: 0;
  transition: transform 1.5s cubic-bezier(0, 0.9, 0.27, 0.99), opacity 2s;
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
