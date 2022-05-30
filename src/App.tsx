import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { AppContainer as Container } from './styles';

function App() {
  return (
    <div>
      <Container>
        <AboutMe />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
