import { inter, rubik, grotesk } from '@/config/fonts';

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

export const Typography = ({ text, variant, className }: Props) => {
  switch (variant) {
    case 'H1':
      return <h1 className={`${grotesk.className} font-bold text-[64px] -tracking-[0.25px]`}>{text}</h1>;
    case 'H2':
      return <h2 className={`${grotesk.className} font-bold text-5xl leading-[56px] -tracking-[-0.96px] ${className}`}>{text}</h2>;
    case 'Subtitle':
      return <p className={`${rubik.className} text-[20px] leading-8 font-light text-text-secondary`}>{text}</p>
    case 'Base2(SM)':
      return <span className={`${rubik.className} text-sm font-semibold z-10`}>{text}</span>
    case 'Small':
      return <p className={`${rubik.className} text-[10px] leading-3 text-text-tertiary`}>{text}</p>
    case 'Body':
      return <p className={`${inter.className} leading-6 text-text-tertiary`}>{text}</p>
    case 'Harline':
      return <p className={`${rubik.className} font-semibold text-xs leading-5 tracking-[0.6px] ${className}`}>{text}</p>
  }
}
