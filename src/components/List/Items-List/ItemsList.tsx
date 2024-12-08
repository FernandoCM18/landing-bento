import Image from 'next/image';
import { Typography, CircularButton, Icon } from '@/components';
import { cn } from '@/utils/cn';
import { tasks } from '@/data/tasks';
import style from './ItemsList.module.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const ItemsList = (props: Props) => {
  return (
    <div className="relative flex" {...props}>
      <Image
        src="/assets/images/Vector.png"
        alt='vector'
        width={64}
        height={64}
        className={`${style.Vector} absolute`}
      />
      <div className={`${style.ItemsListBorder}`}>
        <div className={`SimpleList m-4 flex flex-col gap-2`}>
          <header className="flex items-center justify-between">
            <div className="flex gap-3 items-center mb-3">
              <CircularButton>
                <Icon name="arrowLeft" />
              </CircularButton>
              <Typography variant="Title" text="Upcoming" className="text-text-primary z-10" />
            </div>
            <CircularButton>
              <Icon name="plus" />
            </CircularButton>
          </header>
          <ul className='z-10 space-y-2'>
            {
              tasks.map((task) => (
                <Item
                  key={task.id}
                  title={task.title}
                  isActions={task.isActions}
                  isHover={task.isHover}
                  isSelected={task.isSelected}
                />
              ))
            }
          </ul>
          <footer className="flex justify-between items-center mt-3">
            <div className="flex gap-3 items-center">
              <Icon name="taskListFooter" size={32} />
              <Typography variant="Harline" text='COMPLETED 1/5' />
            </div>
            <CircularButton>
              <Icon name="dots" />\
            </CircularButton>
          </footer>
        </div>
      </div>
    </div>
  )
}
interface ItemProps {
  title: string;
  isActions?: boolean;
  isHover?: boolean;
  isSelected?: boolean;
};

const Item = ({ title, isActions, isHover, isSelected }: ItemProps) => {
  return (
    <>
      {(isHover && isActions === false) && (
        <div className='bg-neutral-neutral/[0.10] w-full rounded-xl h-14 relative' />
      )}
      <li className={cn(
        "flex justify-between items-center rounded-xl px-3 py-4",
        isSelected ? 'bg-neutral-neutral/[0.02]' : 'bg-neutral-neutral/[0.05]',
        (isHover && isActions === false) && 'absolute top-[145px] ml-28 w-full -rotate-2 backdrop-blur-[32px] bg-neutral-neutral/[0.10] shadow-shadow-item-hover'
      )}>
        <div className="flex gap-3 items-center">
          {
            isSelected ? (
              <Icon name="taskItemSelected" />
            ) : (
              <Icon name="taskItemNotSelected" />
            )
          }

          <Typography variant="Base2(M)" text={title} className="text-text-secondary" />
        </div>
        <div className="flex gap-3">
          {
            isActions && (
              <>
                <Icon name="copy" />
                <Icon name="trash" />
              </>
            )
          }
          <Icon name="dragGrab" className='fill-text-tertiary' />
        </div>
      </li>
    </>
  )
};
