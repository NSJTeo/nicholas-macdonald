import { useState, useEffect } from 'react';
import { AboutMeWord as Word } from '../../styles';
import './AboutMe.scss';

const titleText = 'Nicholas MacDonald';
const aboutMeText = `I'm a full stack developer living in Vancouver, B.C. Looking for freelance work! Comfortable with JavaScript, TypeScript, React, Node, Express, MongoDB, SQL and much more. You can reach me at n.teomacdonald@gmail.com.`;

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
    <section className="about-me__container">
      <h1 className="about-me__title">{title}</h1>
      <p className="about-me__words">{aboutMeTextSpans}</p>
    </section>
  );
}
