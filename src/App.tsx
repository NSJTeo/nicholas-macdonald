import projects from './assets/projects.json';
import AboutMe from './components/AboutMe';
import Project from './components/Project';

const projectsList = projects.map((_project, i) => <Project key={i} />);

function App() {
  return (
    <>
      <AboutMe />
      <ul>{projectsList}</ul>
    </>
  );
}

export default App;
