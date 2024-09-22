import Image from 'next/image';
import { Typography } from '@/components';
import styles from './Image1.module.css';

export const Image1 = () => {
  return (
    <div>
      <Image
        src="/assets/images/main-frame.png"
        alt="image1"
        width={512}
        height={528}
      />
      <div>
        <TaskItem
          icon={
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.75 0.75C4.75 0.335786 4.41421 0 4 0C3.58579 0 3.25 0.335786 3.25 0.75H4.75ZM3.25 7.25C3.25 7.66421 3.58579 8 4 8C4.41421 8 4.75 7.66421 4.75 7.25H3.25ZM0.75 3.25C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75V3.25ZM7.25 4.75C7.66421 4.75 8 4.41421 8 4C8 3.58579 7.66421 3.25 7.25 3.25V4.75ZM16.8284 12.2322C17.1213 11.9393 17.1213 11.4645 16.8284 11.1716C16.5355 10.8787 16.0607 10.8787 15.7678 11.1716L16.8284 12.2322ZM11.1716 15.7678C10.8787 16.0607 10.8787 16.5355 11.1716 16.8284C11.4645 17.1213 11.9393 17.1213 12.2322 16.8284L11.1716 15.7678ZM12.2322 11.1716C11.9393 10.8787 11.4645 10.8787 11.1716 11.1716C10.8787 11.4645 10.8787 11.9393 11.1716 12.2322L12.2322 11.1716ZM15.7678 16.8284C16.0607 17.1213 16.5355 17.1213 16.8284 16.8284C17.1213 16.5355 17.1213 16.0607 16.8284 15.7678L15.7678 16.8284ZM14 6.5C12.6193 6.5 11.5 5.38071 11.5 4H10C10 6.20914 11.7909 8 14 8V6.5ZM16.5 4C16.5 5.38071 15.3807 6.5 14 6.5V8C16.2091 8 18 6.20914 18 4H16.5ZM14 1.5C15.3807 1.5 16.5 2.61929 16.5 4H18C18 1.79086 16.2091 0 14 0V1.5ZM14 0C11.7909 0 10 1.79086 10 4H11.5C11.5 2.61929 12.6193 1.5 14 1.5V0ZM3.25 0.75V4H4.75V0.75H3.25ZM3.25 4V7.25H4.75V4H3.25ZM0.75 4.75H4V3.25H0.75V4.75ZM4 4.75H7.25V3.25H4V4.75ZM15.7678 11.1716L13.4697 13.4697L14.5303 14.5303L16.8284 12.2322L15.7678 11.1716ZM13.4697 13.4697L11.1716 15.7678L12.2322 16.8284L14.5303 14.5303L13.4697 13.4697ZM11.1716 12.2322L13.4697 14.5303L14.5303 13.4697L12.2322 11.1716L11.1716 12.2322ZM13.4697 14.5303L15.7678 16.8284L16.8284 15.7678L14.5303 13.4697L13.4697 14.5303ZM2.25 11.5H5.75V10H2.25V11.5ZM6.5 12.25V15.75H8V12.25H6.5ZM5.75 16.5H2.25V18H5.75V16.5ZM1.5 15.75V12.25H0V15.75H1.5ZM2.25 16.5C1.83579 16.5 1.5 16.1642 1.5 15.75H0C0 16.9926 1.00736 18 2.25 18V16.5ZM6.5 15.75C6.5 16.1642 6.16421 16.5 5.75 16.5V18C6.99264 18 8 16.9926 8 15.75H6.5ZM5.75 11.5C6.16421 11.5 6.5 11.8358 6.5 12.25H8C8 11.0074 6.99264 10 5.75 10V11.5ZM2.25 10C1.00736 10 0 11.0074 0 12.25H1.5C1.5 11.8358 1.83579 11.5 2.25 11.5V10Z" fill="#F8F8F8" fillOpacity="0.7" />
            </svg>
          }
          text='Minimal icons'
          positions='top-[78px] -left-[100px]'
        />
        <TaskItem
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.25 12C21.25 19.1094 13.6572 12.7979 12 16.1176C10.9722 18.1765 14.9058 20.75 12 20.75C6.89137 20.75 2.75 16.8325 2.75 12C2.75 7.16751 6.89137 3.25 12 3.25C17.1086 3.25 21.25 7.16751 21.25 12Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" />
              <path d="M11.5 7.75C11.5 8.44036 10.9404 9 10.25 9C9.55964 9 9 8.44036 9 7.75C9 7.05964 9.55964 6.5 10.25 6.5C10.9404 6.5 11.5 7.05964 11.5 7.75Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" />
              <path d="M8.5 12C8.5 12.6904 7.94036 13.25 7.25 13.25C6.55964 13.25 6 12.6904 6 12C6 11.3096 6.55964 10.75 7.25 10.75C7.94036 10.75 8.5 11.3096 8.5 12Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" />
              <path d="M16.5 9.25C16.5 9.94036 15.9404 10.5 15.25 10.5C14.5596 10.5 14 9.94036 14 9.25C14 8.55964 14.5596 8 15.25 8C15.9404 8 16.5 8.55964 16.5 9.25Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" />
            </svg>
          }
          text='Brand your list'
          positions='top-[56px] -right-[100px]'
        />
        <TaskItem
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.75 16.75H20.25M11.75 7.25H20.25M6.25 9.75V4.75L3.75 6.5M4 14.9318C4 14.9318 4.72373 14.25 5.60886 14.25C6.494 14.25 7.21154 14.8719 7.21154 15.639C7.21154 17.4385 3.75 17.75 3.75 19.25H7.5" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
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
      bg-neutral-neutral-110 
      shadow-shadow-4 
      backdrop-blur-lg
    `}>
      <div className={`
          relative
          w-11 h-11 p-[10px] 
          flex items-center justify-center 
          rounded-full 
          bg-neutral-neutral-360 
          shadow-shadow-4
          ${styles.borderCircle}
        `}>
        {icon}
      </div>
      <Typography text={text} variant="Base(M)" />
    </div>
  )
}
