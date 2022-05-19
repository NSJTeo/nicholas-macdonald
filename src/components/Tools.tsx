import { ToolsContainer as Container } from '../styles';

type Props = {
  toolsRef: React.RefObject<HTMLUListElement>;
};

export default function Tools({ toolsRef }: Props) {
  return <Container ref={toolsRef}>Tools</Container>;
}
