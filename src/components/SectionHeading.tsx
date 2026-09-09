interface Props {
  num: string;
  title: string;
  action?: React.ReactNode;
}

export default function SectionHeading({ num, title, action }: Props) {
  return (
    <div className="section-head">
      <span className="num">{num}</span>
      <h2>{title}</h2>
      {action}
    </div>
  );
}
