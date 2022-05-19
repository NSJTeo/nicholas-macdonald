import { ExperienceContainer as Container } from '../styles';

type Props = {
  experienceRef: React.RefObject<HTMLDivElement>;
};

export default function Experience({ experienceRef }: Props) {
  return <Container ref={experienceRef}>Experience</Container>;
}
