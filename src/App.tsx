import { useRef } from 'react';
import styled from 'styled-components';
import projects from './assets/projects.json';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Project from './components/Project';

const projectsList = projects.map((_project, i) => <Project key={i} />);

const Links = styled.ul`
  height: 50rem;
`;

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
    <>
      <AboutMe />
      <Links>
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
      </Links>
      <Experience experienceRef={experienceRef} />
      <Tools toolsRef={toolsRef} />
      <ul ref={projectsRef}>{projectsList}</ul>
    </>
  );
}

export default App;
