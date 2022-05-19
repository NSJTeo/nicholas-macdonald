type Props = {
  toolsRef: React.RefObject<HTMLDivElement>;
};

export default function Tools({ toolsRef }: Props) {
  return <div ref={toolsRef}>Tools</div>;
}
