import { useState, useEffect } from 'react';
import {
  AboutMeContainer as Container,
  AboutMeTitle as Title,
} from '../styles';

const titleText = 'Nicholas MacDonald - Full Stack Developer';

export default function AboutMe() {
  const [title, setTitle] = useState<string>('');
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
      return;
    }
    if (titleText === title) return;
    const timeout = setTimeout(() => {
      setTitle(titleText.slice(0, title.length + 1));
    }, 50);

    return () => clearTimeout(timeout);
  }, [title, loaded]);

  return (
    <Container>
      <h1>
        <Title>{title}</Title>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra
        mauris tortor, et facilisis nulla tempus nec. Duis quis dolor finibus,
        vehicula ipsum quis, porttitor ligula. Etiam tempor non elit interdum
        mollis. Ut vitae auctor arcu. Nullam dictum egestas risus vitae tempus.
        Aliquam justo elit, condimentum nec eros vitae, porta ultricies ex.
        Donec sodales vestibulum purus, eget elementum ex gravida non. Donec
        eget magna ut sapien scelerisque elementum. Aenean pharetra nisi sit
        amet magna lobortis rhoncus. Vivamus luctus fermentum velit, vitae
        tristique metus bibendum quis. Donec metus nunc, scelerisque in felis
        vitae, pulvinar molestie orci. Aenean semper imperdiet eros, quis
        viverra turpis accumsan nec. Sed eget nibh tincidunt, viverra dolor et,
        pharetra lectus. Aenean ut justo enim. Cras nec consequat magna. Sed
        dapibus vel arcu eu fermentum.
      </p>
    </Container>
  );
}
