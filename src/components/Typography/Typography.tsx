import { memo } from 'react';
import { inter, rubik, grotesk } from '@/config/fonts';
import { cn } from '@/utils/cn';

interface Props {
  text: string;
  className?: string;
  variant:
  'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'Title'
  | 'Body'
  | 'Body2(R)'
  | 'Body2(M)'
  | 'Body2(B)'
  | 'Body(L)'
  | 'Base(R)'
  | 'Base(M)'
  | 'Base2(M)'
  | 'Base2(R)'
  | 'Base2(SM)'
  | 'Caption(SM)'
  | 'Caption(R)'
  | 'Harline'
  | 'Small'
  | 'Small(SM)'
  | 'Subtitle'
};

export const Typography = memo(({ text, variant, className }: Props) => {
  switch (variant) {
    case 'H1':
      return <h1 className={cn(grotesk.className, "font-bold text-[64px] -tracking-[0.25px]", className)}>{text}</h1>;
    case 'H2':
      return <h2 className={cn(grotesk.className, "font-bold text-5xl leading-[56px] -tracking-[-0.96px]", className)}>{text}</h2>;
    case 'H3':
      return <h3 className={cn(grotesk.className, "font-bold text-[40px] leading-[48px] -tracking-[0.8px]", className)}>{text}</h3>
    case 'Subtitle':
      return <p className={cn(rubik.className, "text-[20px] leading-8 font-light", className)}>{text}</p>
    case 'Base2(SM)':
      return <span className={cn(rubik.className, "text-sm font-semibold z-10", className)}>{text}</span>
    case 'Base2(M)':
      return <p className={cn(rubik.className, "text-sm font-medium", className)}>{text}</p>
    case 'Base2(R)':
      return <p className={cn(rubik.className, "text-sm", className)}>{text}</p>
    case 'Small':
      return <p className={cn(rubik.className, "text-[10px] leading-3", className)}>{text}</p>
    case 'Body':
      return <p className={cn(inter.className, "leading-6", className)}>{text}</p>
    case 'Harline':
      return <p className={cn(rubik.className, "font-semibold text-xs leading-5 tracking-[0.6px]", className)}>{text}</p>
    case 'Title':
      return <h3 className={cn(rubik.className, "font-medium text-xl leading-[24px]", className)}>{text}</h3>
    case 'Base(R)':
      return <p className={cn(rubik.className, "text-base leading-6", className)}>{text}</p>
    case 'Base(M)':
      return <p className={cn(rubik.className, "font-medium leading-6", className)}>{text}</p>
    case 'Caption(R)':
      return <p className={cn(rubik.className, "text-xs", className)}>{text}</p>
  }
});

Typography.displayName = 'Typography';