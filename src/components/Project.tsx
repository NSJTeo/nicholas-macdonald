import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  inView: boolean;
}

const OuterContainer = styled.li`
  height: 30rem;
  margin-bottom: 5rem;
  background: lightblue;
  list-style: none;
  overflow-x: hidden;
`;

const InnerContainer = styled.div<ContainerProps>`
  opacity: 0;
  transition: transform 1s cubic-bezier(0, 0.9, 0.27, 0.99), opacity 1.5s;
  transform: translateX(100%);
  ${({ inView }) => (inView ? 'transform: translateX(0%); opacity: 1;' : '')}
`;

export default function Project() {
  const [inView, setInView] = useState(false);
  const projectEl = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    });
    if (projectEl?.current) {
      observer.observe(projectEl.current);
    }
  }, []);

  return (
    <OuterContainer ref={projectEl}>
      <InnerContainer inView={inView}>Project</InnerContainer>
    </OuterContainer>
  );
}
