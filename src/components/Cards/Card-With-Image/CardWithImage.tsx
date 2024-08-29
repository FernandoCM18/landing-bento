import Image from 'next/image';
import { Typography } from '@/components';
import styles from './CardWithImage.module.css';

interface Props {
  title: string;
  description: string;
  image: string;
  imageRight?: boolean;
}

export const CardWithImage = ({ title, description, image, imageRight }: Props) => {
  return (
    <article className={`${styles.item}`}>
      <div className={styles.row}>
        <div className={`${styles.details} text-start`}>
          <div className={`${styles.iconBg} flex justify-center items-center w-16 h-16 p-5 rounded-2xl mb-12`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z" fill="#F8F8F8" fill-opacity="0.7" />
            </svg>
          </div>
          <Typography variant="H3" text={title} className='gradient-text text-pretty mb-6' />
          <Typography variant="Subtitle" text={description} className='text-text-tertiary' />
        </div>
        <Image src={image} alt={title} width={500} height={500} className={styles.image} />
      </div>
    </article>
  )
}