import { Typography } from "@/components/";
import style from './TagLine.module.css';

interface Props {
  text: string;
};

export const TagLine = ({ text }: Props) => {
  return (
    <span className={style.label}>
      <Typography variant="Harline" text={text} className="relative text-text-tertiary z-10" />
      <div className={style.circle} />
    </span>
  )
};
