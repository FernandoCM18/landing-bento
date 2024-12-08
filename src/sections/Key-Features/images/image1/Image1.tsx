import Image from 'next/image';
import { Icon, Typography } from '@/components';
import styles from './Image1.module.css';

export const Image1 = () => {
  return (
    <div>
      <Image
        src="/assets/images/image1.svg"
        alt="image1"
        width={512}
        height={528}
      />
      <div>
        <TaskItem
          icon={<Icon name="minimal" size={18} />}
          text='Minimal icons'
          positions='top-[78px] -left-[100px]'
        />
        <TaskItem
          icon={<Icon name="colorPalette" />}
          text='Brand your list'
          positions='top-[56px] -right-[100px]'
        />
        <TaskItem
          icon={<Icon name="numberList" />}
          text="Unlimited list creation"
          positions='bottom-[222px] -right-[75px]'
        />
      </div>

    </div>
  )
}


interface TaskItemProps {
  icon?: React.ReactNode;
  text: string;
  positions?: string;
}

const TaskItem = ({ icon, text, positions }: TaskItemProps) => {
  return (
    <div className={`
      absolute ${positions}
      flex gap-3 items-center 
      w-fit
      pl-3 pt-3 pb-3 pr-8 
      rounded-[68px] 
      bg-neutral-neutral/[0.10] 
      shadow-shadow-4 
      backdrop-blur-lg
    `}>
      <div className={`
          relative
          w-11 h-11 p-[10px] 
          flex items-center justify-center 
          rounded-full 
          bg-raisin-black/[0.60]
          shadow-shadow-4
          ${styles.borderCircle}
        `}>
        {icon}
      </div>
      <Typography text={text} variant="Base(M)" />
    </div>
  )
}
