import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { AppContainer as Container, AppMask as Mask } from './styles';

function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [maskOn, setMaskOn] = useState<boolean>(true);

  useEffect(() => {
    setLoaded(true);
    setTimeout(() => {
      setMaskOn(false);
    }, 2000);
  }, []);

  return (
    <div>
      {maskOn && <Mask loaded={loaded} />}
      <Container>
        <AboutMe />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
