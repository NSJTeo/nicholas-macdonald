import React from 'react';
import projects from '../assets/projects.json';
import { ProjectsContainer } from '../styles/ProjectsContainer';
import { ProjectType as Project } from '../types';
import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';

type Props = {
  projectsRef: React.RefObject<HTMLUListElement>;
};

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

export default function Projects({ projectsRef }: Props) {
  return (
    <ProjectsContainer ref={projectsRef}>{projectsList()}</ProjectsContainer>
  );
}
