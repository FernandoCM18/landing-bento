import Image from 'next/image';
import { Typography } from '@/components';
import styles from './CardWithImage.module.css';
import icon from '/assets/icons/icon.svg';

interface Props {
  title: string;
  description: string;
  imageRight?: boolean;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

export const CardWithImage = ({ title, description, icon, children }: Props) => {
  return (
    <article className={`${styles.item}`}>
      <div className={styles.row}>
        <div className={`${styles.details} text-start`}>
          <div className={`${styles.iconBg} flex justify-center items-center w-16 h-16 p-5 rounded-2xl mb-12`}>
            {icon}
          </div>
          <Typography variant="H3" text={title} className='gradient-text text-pretty mb-6' />
          <Typography variant="Subtitle" text={description} className='text-text-tertiary' />
        </div>
        <div className='relative'>
          {children}
        </div>
      </div>
    </article>
  )
}