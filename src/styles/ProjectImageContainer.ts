import styled from 'styled-components';

type ProjectImageProps = {
  index: number;
  left: boolean;
  inView: boolean;
};

export const ProjectImageContainer = styled.li<ProjectImageProps>`
  padding: 0.5rem;
  background-color: black;
  width: fit-content;
  display: block;
  border: 2px solid white;
  box-shadow: 3px 3px 5px rgb(255 255 255 / 60%);
  border-radius: 5px;
  opacity: 0;
  ${({ index }) =>
    `transition: transform 2s cubic-bezier(0, 0.9, 0.27, 0.99) ${
      index * 250
    }ms, opacity 2s ${index * 250}ms;`}
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
