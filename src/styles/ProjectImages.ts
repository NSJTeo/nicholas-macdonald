import styled from 'styled-components';

interface ProjectImagesProps {
  left: boolean;
}

export const ProjectImages = styled.ul<ProjectImagesProps>`
  display: flex;
  ${({ left }) => (left ? '' : 'flex-direction: row-reverse')}
`;
