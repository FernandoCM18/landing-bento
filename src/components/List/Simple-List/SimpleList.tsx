import { CircularButton, CircularIcon, Typography, Icon } from '@/components';
import style from './SimpleList.module.css';

const todos = [
  { id: 1, text: 'Today', count: 3, icon: <CircularIcon icon="today" /> },
  { id: 2, text: 'Work', count: 3, icon: <CircularIcon icon="work" /> },
  { id: 3, text: 'Upcoming', count: 3, icon: <CircularIcon icon="upcoming" /> },
  { id: 4, text: 'Completed', count: 3, icon: <CircularIcon icon="completedTask" /> },
];

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const SimpleList = (props: Props) => {
  return (
    <div className={`SimpleList space-y-3`} {...props}>
      <div className="flex justify-between items-center gap-3">
        <div className="flex gap-3 items-center w-full h-11 bg-neutral-neutral-370 rounded-[48px] p-3">
          <Icon name="search" />
          <Typography variant="Base2(R)" text="Search list..." className="text-text-primary" />
        </div>
        <CircularButton>
          <Icon name="plus" />
        </CircularButton>
      </div>
      <ul className="flex flex-col gap-2">
        {
          todos.map((todo) => (
            <li key={todo.id} className={style.ListGroup}>
              <div className={`${style.ListItem} flex justify-between p-3 items-center`}>
                <span className="flex gap-4 items-center z-10">
                  <i className="text-text-secondary">{todo.icon}</i>
                  <Typography variant='Base2(M)' text={todo.text} className="text-text-primary" />
                </span>
                <span className='z-10'><Typography variant="Base2(R)" text={todo.count.toString()} className="text-text-secondary" /></span>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
