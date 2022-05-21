import styled from 'styled-components';

type ProjectImageProps = {
  index: number;
  left: boolean;
  inView: boolean;
};

export const ProjectImageContainer = styled.li<ProjectImageProps>`
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: white;
  width: fit-content;
  display: block;
  border: 1px solid black;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 40%);
  border-radius: 5px;
  ${({ left }) => (left ? 'margin-right: 1rem;' : 'margin-left: 1rem;')}
  opacity: 0;
  ${({ index }) =>
    `transition: transform 2s cubic-bezier(0, 0.9, 0.27, 0.99) ${
      index * 250
    }ms, opacity 2s ${index * 250}ms;`}
  &:last-child {
    margin-left: 0;
    margin-right: 0;
  }
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
