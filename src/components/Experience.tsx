type Props = {
  experienceRef: React.RefObject<HTMLDivElement>;
};

export default function Experience({ experienceRef }: Props) {
  return <div ref={experienceRef}>Experience</div>;
}
