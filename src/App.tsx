import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { AppContainer as Container, AppMask as Mask } from './styles';

function App() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <Mask loaded={loaded} />
      <Container>
        <AboutMe />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
