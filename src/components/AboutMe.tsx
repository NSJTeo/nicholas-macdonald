import { useState, useEffect } from 'react';
import {
  AboutMeContainer as Container,
  AboutMeTitle as Title,
  AboutMeWord as Word,
} from '../styles';

const titleText = 'Nicholas MacDonald - Full Stack Developer';
const aboutMeText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra mauris tortor, et facilisis nulla tempus nec. Duis quis dolor finibus, vehicula ipsum quis, porttitor ligula. Etiam tempor non elit interdum mollis. Ut vitae auctor arcu. Nullam dictum egestas risus vitae tempus. Aliquam justo elit, condimentum nec eros vitae, porta ultricies ex.';

export default function AboutMe() {
  const [title, setTitle] = useState<string>('');
  const [loaded, setLoaded] = useState<boolean>(false);

  const aboutMeTextSpans = aboutMeText.split(' ').map((word, index) => {
    return (
      <Word index={index} loaded={loaded}>
        {word}{' '}
      </Word>
    );
  });

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
      <p>{aboutMeTextSpans}</p>
    </Container>
  );
}
