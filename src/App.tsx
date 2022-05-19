import { useRef } from 'react';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Projects from './components/Projects';
import {
  AppContainer as Container,
  LinkButton as Button,
  LinkButtons as Buttons,
} from './styles';

function App() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLUListElement>(null);
  const projectsRef = useRef<HTMLUListElement>(null);

  const scrollToElement = (
    ref: React.RefObject<HTMLDivElement> | React.RefObject<HTMLUListElement>
  ) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <AboutMe />
      <Buttons>
        <li>
          <Button onClick={() => scrollToElement(toolsRef)}>Tools</Button>
        </li>
        <li>
          <Button onClick={() => scrollToElement(projectsRef)}>Projects</Button>
        </li>
        <li>
          <Button onClick={() => scrollToElement(experienceRef)}>
            Experience
          </Button>
        </li>
      </Buttons>
      <Tools toolsRef={toolsRef} />
      <Projects projectsRef={projectsRef} />
      <Experience experienceRef={experienceRef} />
    </Container>
  );
}

export default App;
