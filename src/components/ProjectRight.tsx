import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  ProjectContainer,
  ProjectDescription as Description,
  ProjectTitle as Title,
} from '../styles';
import { ProjectType as Project } from '../types';

type Props = {
  project: Project;
};

interface ContainerProps {
  inView: boolean;
}

const Container = styled(ProjectContainer)`
  display: flex;
  justify-content: flex-end;
  text-align: end;
`;

const InnerContainer = styled.div<ContainerProps>`
  /* opacity: 0;
  transition: transform 1s cubic-bezier(0, 0.9, 0.27, 0.99), opacity 1.5s;
  transform: translateX(-100vw); */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* ${({ inView }) =>
    inView ? 'transform: translateX(0vw); opacity: 1;' : ''} */
`;

export default function ProjectRight({ project }: Props) {
  const [inView, setInView] = useState(false);
  const projectEl = useRef(null);

  const { name, description, url } = project;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    });
    if (projectEl?.current) {
      observer.observe(projectEl.current);
    }
  }, []);

  return (
    <Container ref={projectEl}>
      <InnerContainer inView={inView}>
        <Title left={false} inView={inView}>
          <a target="_blank" rel="noreferrer" href={url}>
            {name}
          </a>
        </Title>
        <Description left={false} inView={inView}>
          {description}
        </Description>
      </InnerContainer>
    </Container>
  );
}
