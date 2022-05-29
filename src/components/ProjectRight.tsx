import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  ProjectContainer,
  ProjectDescription as Description,
  ProjectTitle as Title,
  ProjectImage as Image,
  ProjectImages as Images,
  ProjectImageLink as ImageLink,
  ProjectImageContainer as ImageContainer,
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
  const [inView, setInView] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const projectEl = useRef(null);

  const { name, description, url, images } = project;

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
      return;
    }
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
  }, [loaded]);

  const imagesList = images.map((image, index) => {
    return (
      <ImageContainer key={index} index={index} left={false} inView={inView}>
        <ImageLink target="_blank" rel="noreferrer" href={url}>
          <Image key={index} src={image} />
        </ImageLink>
      </ImageContainer>
    );
  });

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
        <Images left={false}>{imagesList}</Images>
      </InnerContainer>
    </Container>
  );
}
