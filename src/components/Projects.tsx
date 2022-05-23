import { useState, useEffect } from 'react';
import projects from '../assets/projects.json';
import { ProjectsContainer } from '../styles/ProjectsContainer';
import { ProjectType as Project } from '../types';
import { ProjectsTitle as Title } from '../styles/ProjectsTitle';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';

const projectsList = () => {
  let left = true;
  return projects.map((project: Project) => {
    if (left) {
      left = false;
      return <ProjectLeft key={project.id} project={project} />;
    }
    left = true;
    return <ProjectRight key={project.id} project={project} />;
  });
};

export default function Projects() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => {
        setLoaded(true);
      }, 750);
      return;
    }
  }, [loaded]);

  return (
    <>
      <Title loaded={loaded}>Projects</Title>
      <ProjectsContainer>{projectsList()}</ProjectsContainer>
    </>
  );
}
