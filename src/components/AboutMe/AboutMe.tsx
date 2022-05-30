import { useState, useEffect } from 'react';
import {
  AboutMeContainer as Container,
  AboutMeTitle as Title,
  AboutMeWord as Word,
  AboutMeWords as Words,
} from '../../styles';

const titleText = 'Nicholas MacDonald';
const aboutMeText = `I'm a full stack developer living in Vancouver, B.C. Looking for freelance work! Comfortable with JavaScript, TypeScript, React, Node, Express and much more. You can reach me at n.teomacdonald@gmail.com.`;

export function AboutMe() {
  const [title, setTitle] = useState<string>('');
  const [loaded, setLoaded] = useState<boolean>(false);

  const aboutMeTextSpans = aboutMeText.split(' ').map((word, index) => {
    return (
      <Word key={index} index={index} loaded={loaded}>
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
      <Title>{title}</Title>
      <Words>{aboutMeTextSpans}</Words>
    </Container>
  );
}
