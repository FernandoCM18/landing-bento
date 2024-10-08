import style from './CircularButton.module.css';

interface Props {
  children: React.ReactNode;
}

export const CircularButton = ({ children }: Props) => {
  return (
    <button className={`${style.btn} flex justify-center items-center`}>
      {children}
    </button>
  )
}
