import { useRef } from 'react';
import projects from './assets/projects.json';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Project from './components/Project';
import { AppContainer } from './styles';
import { ProjectType } from './types';

const projectsList = projects.map((project: ProjectType) => (
  <Project key={project.id} />
));

function App() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLUListElement>(null);

  const scrollToElement = (
    ref: React.RefObject<HTMLDivElement> | React.RefObject<HTMLUListElement>
  ) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppContainer>
      <AboutMe />
      <ul>
        <li>
          <button onClick={() => scrollToElement(experienceRef)}>
            Experience
          </button>
        </li>
        <li>
          <button onClick={() => scrollToElement(toolsRef)}>Tools</button>
        </li>
        <li>
          <button onClick={() => scrollToElement(projectsRef)}>Projects</button>
        </li>
      </ul>
      <Experience experienceRef={experienceRef} />
      <Tools toolsRef={toolsRef} />
      <ul ref={projectsRef}>{projectsList}</ul>
    </AppContainer>
  );
}

export default App;
