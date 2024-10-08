import Image from 'next/image';
import { Button, Header, Typography, Avatar, Starts, SimpleList, ItemsList, IconList } from '@/components';
import { users } from '@/data/users';

export const HeroHeaderSection = () => {
  return (
    <section id='hero-header'>
      <Header />
      <section className="flex flex-col gap-10 items-center">
        <div>
          <Typography variant="H1" text="Your tasks, simplified" />
          <Typography variant="Subtitle" text="Create, manage, and conquer your to-do lists with ease" className='text-text-secondary' />
        </div>
        <div className="space-y-3">
          <Button text="Get started for free" />
          <Typography variant="Small" text="v1.0.1 – macOS 12+" className='text-text-tertiary' />
        </div>
        <div className="relative">
          {/* TODO: Cambiar la imagen por componentes al tenerlos listos */}
          <Starts className='absolute top-0 left-0 w-full h-fit' />
          <div className="flex items-center justify-center relative w-[1120px] h-[640px]">
            <SimpleList style={{
              position: 'absolute',
              left: '0',
            }} />
            <ItemsList style={{
              position: 'absolute',
              zIndex: 10
            }} />
            <IconList style={{
              position: 'absolute',
              right: '0',
            }} />
          </div>
        </div>
      </section>
      <Typography variant="Body" text="Trusted by over 50,000 designers and developers" className='text-text-tertiary' />
      <div className="flex items-center justify-center mt-6">
        {
          users.slice(0, 6).map((user) => (
            <Avatar key={user.id} avatarUrl={user.avatar} name={user.name} />
          ))
        }
      </div>
    </section>
  )
}
