import Image from "next/image";
import { Typography } from "../../Typography/Typography";
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
        <div className={`${styles.preview} h-[328px]`}>
          <Image
            id="image"
            src={image}
            alt={title}
            width={389}
            height={328}
            className={`${styles.illustration} mx-auto`}
          />
        </div>
        <div className="flex flex-col items-start px-8 text-start">
          <Typography variant="Title" text={title} className="mb-3" />
          <Typography variant="Base(R)" text={description} className="text-text-tertiary text-start" />
        </div>
      </div>
    </article>
  )
}
