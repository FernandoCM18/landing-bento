import Image from "next/image";
import { Typography } from "../Typography/Typography";
import styles from "./Card.module.css";

interface Props {
  title: string;
  description: string;
  image: string;
  number: number;
};

export const Card = ({ title, description, image, number }: Props) => {
  return (
    <article className={`${styles.bento} w-full`}>
      <div className="relative z-10 pt-8 pb-11 px-3">
        <div className={styles.number}>
          <span>{number}</span>
        </div>
        <Image src={image} alt={title} width={389} height={328} className="mb-8 w-full h-[328px]" />
        <div className="flex flex-col items-start px-8">
          <Typography variant="Title" text={title} />
          <Typography variant="Base(R)" text={description} className="text-text-tertiary text-start" />
        </div>
      </div>
    </article>
  )
}
