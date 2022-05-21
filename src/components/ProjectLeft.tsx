import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  ProjectContainer as Container,
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

const InnerContainer = styled.div<ContainerProps>`
  /* opacity: 0;
  transition: transform 1s cubic-bezier(0, 0.9, 0.27, 0.99), opacity 1.5s;
  transform: translateX(100vw);
  ${({ inView }) =>
    inView ? 'transform: translateX(0vw); opacity: 1;' : ''} */
`;

export default function ProjectLeft({ project }: Props) {
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
      <ImageContainer index={index} left={true} inView={inView}>
        <ImageLink target="_blank" rel="noreferrer" href={url}>
          <Image key={index} src={image} />
        </ImageLink>
      </ImageContainer>
    );
  });

  return (
    <Container ref={projectEl}>
      <InnerContainer inView={inView}>
        <Title left={true} inView={inView}>
          <a target="_blank" rel="noreferrer" href={url}>
            {name}
          </a>
        </Title>
        <Description left={true} inView={inView}>
          {description}
        </Description>
        <Images left={true}>{imagesList}</Images>
      </InnerContainer>
    </Container>
  );
}
