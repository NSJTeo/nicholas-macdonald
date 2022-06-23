import styled from 'styled-components';

type ProjectDescriptionProps = {
  left: boolean;
  inView: boolean;
};

export const ProjectDescription = styled.p<ProjectDescriptionProps>`
  margin-bottom: 1rem;
  max-width: 100%;
  opacity: 0;
  line-height: 1.25rem;
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
  @media (min-width: 768px) {
    max-width: 640px;
  }
`;
