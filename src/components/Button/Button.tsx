import { Typography } from '../Typography/Typography';
import styles from './Button.module.css';

interface Props {
  text?: string;
};

export const Button = ({ text = 'Button' }: Props) => {
  return (
    <div className='relative'>
      <button className={styles.btn}>
        <Typography variant='Base2(SM)' text={text} />
      </button>
      <div className='btn'></div>
    </div>
  );
};