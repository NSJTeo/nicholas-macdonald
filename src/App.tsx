import { AboutMe, ProjectsList } from './components';
import { AppContainer as Container } from './styles';

function App() {
  return (
    <div>
      <Container>
        <AboutMe />
        <ProjectsList />
      </Container>
    </div>
  );
}

export default App;
