import styled from 'styled-components';

interface ProjectImagesProps {
  left: boolean;
}

export const ProjectImages = styled.ul<ProjectImagesProps>`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-start;
  ${({ left }) => (left ? '' : 'flex-direction: row-reverse')}
`;
