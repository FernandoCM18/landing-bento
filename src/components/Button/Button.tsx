import styles from './Button.module.css';

interface Props {
  text?: string;
};

export const Button = ({ text = 'Button' }: Props) => {
  return (
    <div className='relative'>
      <button className={styles.btn}>
        <span className='z-10'>{text}</span>
      </button>
      <div className='btn'></div>
    </div>
  );
};