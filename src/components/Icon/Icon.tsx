import React, { memo, useMemo } from 'react';

type SvgIcon = (props: React.SVGProps<SVGSVGElement>) => JSX.Element | null;

// Ejemplo de íconos (reemplaza estos con tus propios SVGs)
const StarIcon: SvgIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const HeartIcon: SvgIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const ChevronLeftIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.3787 16L10.4393 13.0607C9.85355 12.4749 9.85355 11.5251 10.4393 10.9393L13.3787 8" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRightIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 16L12.9393 13.0607C13.5251 12.4749 13.5251 11.5251 12.9393 10.9393L10 8" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UpcomingIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7.75 4.75V2.75M16.25 4.75V2.75M17 14.75V16.9996L18.75 18.75M8.75 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V7.75C3.75 6.09315 5.09315 4.75 6.75 4.75H17.25C18.9069 4.75 20.25 6.09315 20.25 7.75V8.75M14.9917 12.1509C17.6701 11.0415 20.7396 12.3137 21.8491 14.9919C22.9586 17.6702 21.6863 20.7396 19.0079 21.8491C16.3296 22.9585 13.2601 21.6863 12.1506 19.0081C11.0419 16.3306 12.3133 13.2604 14.9917 12.1509Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowLeftIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.7537 18.2461L4.62502 14.1174C3.45345 12.9459 3.45344 11.0464 4.62501 9.87479L8.7537 5.74609M4.2537 11.9961L20.2537 11.9961" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z" fill="#F8F8F8" fillOpacity="0.7" />
  </svg>
);

const TaskListFooterIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM6.4 16C6.4 21.3019 10.6981 25.6 16 25.6C21.3019 25.6 25.6 21.3019 25.6 16C25.6 10.6981 21.3019 6.4 16 6.4C10.6981 6.4 6.4 10.6981 6.4 16Z" fill="#F8F8F8" fillOpacity="0.05" />
    <path d="M16 2C16 0.895432 16.8989 -0.0128754 17.9948 0.124839C19.4105 0.302736 20.7991 0.669597 22.1229 1.21793C24.0641 2.022 25.828 3.20055 27.3137 4.68629C28.7994 6.17203 29.978 7.93586 30.7821 9.87707C31.3304 11.2009 31.6973 12.5895 31.8752 14.0052C32.0129 15.1011 31.1046 16 30 16H27.6C26.4954 16 25.6209 15.0951 25.3924 14.0144C25.2706 13.4382 25.0957 12.873 24.8692 12.3262C24.3868 11.1615 23.6797 10.1032 22.7882 9.21177C21.8968 8.32033 20.8385 7.6132 19.6738 7.13076C19.127 6.90428 18.5618 6.7294 17.9856 6.60758C16.9049 6.37912 16 5.50457 16 4.4V2Z" fill="#F8F8F8" fillOpacity="0.7" />
  </svg>
);

const DotsIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TaskItemSelectedIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1.5" y="1.5" width="21" height="21" rx="10.5" stroke="#F8F8F8" strokeOpacity="0.25" strokeWidth="3" />
    <circle cx="12" cy="12" r="6" fill="url(#paint0_linear_131_10089)" />
    <defs>
      <linearGradient id="paint0_linear_131_10089" x1="12" y1="6" x2="12" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F8F8F8" stopOpacity="0.9" />
        <stop offset="1" stopColor="#F8F8F8" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>
);

const TaskItemNotSelectedIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1.5" y="1.5" width="21" height="21" rx="10.5" stroke="#F8F8F8" strokeOpacity="0.5" strokeWidth="3" />
  </svg>
);

const CopyIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity="0.8">
      <path d="M7.75 7.75V6.75C7.75 5.09315 9.09315 3.75 10.75 3.75H17.25C18.9069 3.75 20.25 5.09315 20.25 6.75V13.26C20.25 14.9169 18.9069 16.26 17.25 16.26H16.25M3.75 10.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H13.25C14.9069 20.25 16.25 18.9069 16.25 17.25V10.75C16.25 9.09315 14.9069 7.75 13.25 7.75H6.75C5.09315 7.75 3.75 9.09315 3.75 10.75Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

const TrashIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity="0.8">
      <path d="M5.75 5.75V18.25C5.75 19.9069 7.09315 21.25 8.75 21.25H15.25C16.9069 21.25 18.25 19.9069 18.25 18.25V5.75M5.75 5.75H18.25M5.75 5.75H3.75M18.25 5.75H20.25M14 10.75V16.25M10 10.75V16.25M9 5.75C9 4.09315 10.3431 2.75 12 2.75C13.6569 2.75 15 4.09315 15 5.75" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

const DragGrabIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity="0.25">
      <path d="M7.5 5.75C7.5 4.7835 8.2835 4 9.25 4C10.2165 4 11 4.7835 11 5.75C11 6.7165 10.2165 7.5 9.25 7.5C8.2835 7.5 7.5 6.7165 7.5 5.75Z" fill="#F8F8F8" fillOpacity="0.5" />
      <path d="M13 5.75C13 4.7835 13.7835 4 14.75 4C15.7165 4 16.5 4.7835 16.5 5.75C16.5 6.7165 15.7165 7.5 14.75 7.5C13.7835 7.5 13 6.7165 13 5.75Z" fill="#F8F8F8" fillOpacity="0.5" />
      <path d="M7.5 18.25C7.5 17.2835 8.2835 16.5 9.25 16.5C10.2165 16.5 11 17.2835 11 18.25C11 19.2165 10.2165 20 9.25 20C8.2835 20 7.5 19.2165 7.5 18.25Z" fill="#F8F8F8" fillOpacity="0.5" />
      <path d="M13 18.25C13 17.2835 13.7835 16.5 14.75 16.5C15.7165 16.5 16.5 17.2835 16.5 18.25C16.5 19.2165 15.7165 20 14.75 20C13.7835 20 13 19.2165 13 18.25Z" fill="#F8F8F8" fillOpacity="0.5" />
      <path d="M7.5 11.9C7.5 10.9335 8.2835 10.15 9.25 10.15C10.2165 10.15 11 10.9335 11 11.9V12C11 12.9665 10.2165 13.75 9.25 13.75C8.2835 13.75 7.5 12.9665 7.5 12V11.9Z" fill="#F8F8F8" fillOpacity="0.5" />
      <path d="M13 11.9C13 10.9335 13.7835 10.15 14.75 10.15C15.7165 10.15 16.5 10.9335 16.5 11.9V12C16.5 12.9665 15.7165 13.75 14.75 13.75C13.7835 13.75 13 12.9665 13 12V11.9Z" fill="#F8F8F8" fillOpacity="0.5" />
    </g>
  </svg>
);

const SearchIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity="0.8">
      <path d="M20 20L16.1265 16.1265M16.1265 16.1265C17.4385 14.8145 18.25 13.002 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C13.002 18.25 14.8145 17.4385 16.1265 16.1265Z" stroke="#F8F8F8" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

const NumberListIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.75 16.75H20.25M11.75 7.25H20.25M6.25 9.75V4.75L3.75 6.5M4 14.9318C4 14.9318 4.72373 14.25 5.60886 14.25C6.494 14.25 7.21154 14.8719 7.21154 15.639C7.21154 17.4385 3.75 17.75 3.75 19.25H7.5" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MacbookIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3.75 6.25C3.75 4.86929 4.86929 3.75 6.25 3.75H17.75C19.1307 3.75 20.25 4.86929 20.25 6.25V16.75H3.75V6.25Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M1.75 16.75H22.25V17.75C22.25 19.1307 21.1307 20.25 19.75 20.25H4.25C2.86929 20.25 1.75 19.1307 1.75 17.75V16.75Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);

const MinimalIcons: SvgIcon = (props) => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4.75 0.75C4.75 0.335786 4.41421 0 4 0C3.58579 0 3.25 0.335786 3.25 0.75H4.75ZM3.25 7.25C3.25 7.66421 3.58579 8 4 8C4.41421 8 4.75 7.66421 4.75 7.25H3.25ZM0.75 3.25C0.335786 3.25 0 3.58579 0 4C0 4.41421 0.335786 4.75 0.75 4.75V3.25ZM7.25 4.75C7.66421 4.75 8 4.41421 8 4C8 3.58579 7.66421 3.25 7.25 3.25V4.75ZM16.8284 12.2322C17.1213 11.9393 17.1213 11.4645 16.8284 11.1716C16.5355 10.8787 16.0607 10.8787 15.7678 11.1716L16.8284 12.2322ZM11.1716 15.7678C10.8787 16.0607 10.8787 16.5355 11.1716 16.8284C11.4645 17.1213 11.9393 17.1213 12.2322 16.8284L11.1716 15.7678ZM12.2322 11.1716C11.9393 10.8787 11.4645 10.8787 11.1716 11.1716C10.8787 11.4645 10.8787 11.9393 11.1716 12.2322L12.2322 11.1716ZM15.7678 16.8284C16.0607 17.1213 16.5355 17.1213 16.8284 16.8284C17.1213 16.5355 17.1213 16.0607 16.8284 15.7678L15.7678 16.8284ZM14 6.5C12.6193 6.5 11.5 5.38071 11.5 4H10C10 6.20914 11.7909 8 14 8V6.5ZM16.5 4C16.5 5.38071 15.3807 6.5 14 6.5V8C16.2091 8 18 6.20914 18 4H16.5ZM14 1.5C15.3807 1.5 16.5 2.61929 16.5 4H18C18 1.79086 16.2091 0 14 0V1.5ZM14 0C11.7909 0 10 1.79086 10 4H11.5C11.5 2.61929 12.6193 1.5 14 1.5V0ZM3.25 0.75V4H4.75V0.75H3.25ZM3.25 4V7.25H4.75V4H3.25ZM0.75 4.75H4V3.25H0.75V4.75ZM4 4.75H7.25V3.25H4V4.75ZM15.7678 11.1716L13.4697 13.4697L14.5303 14.5303L16.8284 12.2322L15.7678 11.1716ZM13.4697 13.4697L11.1716 15.7678L12.2322 16.8284L14.5303 14.5303L13.4697 13.4697ZM11.1716 12.2322L13.4697 14.5303L14.5303 13.4697L12.2322 11.1716L11.1716 12.2322ZM13.4697 14.5303L15.7678 16.8284L16.8284 15.7678L14.5303 13.4697L13.4697 14.5303ZM2.25 11.5H5.75V10H2.25V11.5ZM6.5 12.25V15.75H8V12.25H6.5ZM5.75 16.5H2.25V18H5.75V16.5ZM1.5 15.75V12.25H0V15.75H1.5ZM2.25 16.5C1.83579 16.5 1.5 16.1642 1.5 15.75H0C0 16.9926 1.00736 18 2.25 18V16.5ZM6.5 15.75C6.5 16.1642 6.16421 16.5 5.75 16.5V18C6.99264 18 8 16.9926 8 15.75H6.5ZM5.75 11.5C6.16421 11.5 6.5 11.8358 6.5 12.25H8C8 11.0074 6.99264 10 5.75 10V11.5ZM2.25 10C1.00736 10 0 11.0074 0 12.25H1.5C1.5 11.8358 1.83579 11.5 2.25 11.5V10Z" fill="#F8F8F8" fillOpacity="0.7" />
  </svg>
);

const ColorPaletteIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21.25 12C21.25 19.1094 13.6572 12.7979 12 16.1176C10.9722 18.1765 14.9058 20.75 12 20.75C6.89137 20.75 2.75 16.8325 2.75 12C2.75 7.16751 6.89137 3.25 12 3.25C17.1086 3.25 21.25 7.16751 21.25 12Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" />
    <path d="M11.5 7.75C11.5 8.44036 10.9404 9 10.25 9C9.55964 9 9 8.44036 9 7.75C9 7.05964 9.55964 6.5 10.25 6.5C10.9404 6.5 11.5 7.05964 11.5 7.75Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" />
    <path d="M8.5 12C8.5 12.6904 7.94036 13.25 7.25 13.25C6.55964 13.25 6 12.6904 6 12C6 11.3096 6.55964 10.75 7.25 10.75C7.94036 10.75 8.5 11.3096 8.5 12Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" />
    <path d="M16.5 9.25C16.5 9.94036 15.9404 10.5 15.25 10.5C14.5596 10.5 14 9.94036 14 9.25C14 8.55964 14.5596 8 15.25 8C15.9404 8 16.5 8.55964 16.5 9.25Z" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" />
  </svg>
);

const ICONS = {
  star: StarIcon,
  heart: HeartIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  upcoming: UpcomingIcon,
  arrowLeft: ArrowLeftIcon,
  plus: PlusIcon,
  taskListFooter: TaskListFooterIcon,
  dots: DotsIcon,
  taskItemSelected: TaskItemSelectedIcon,
  taskItemNotSelected: TaskItemNotSelectedIcon,
  copy: CopyIcon,
  trash: TrashIcon,
  dragGrab: DragGrabIcon,
  search: SearchIcon,
  numberList: NumberListIcon,
  macbook: MacbookIcon,
  minimal: MinimalIcons,
  colorPalette: ColorPaletteIcon
} as const;

type IconName = keyof typeof ICONS;

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref' | 'name'> {
  name: IconName;
  size?: number | string;
  title?: string;
}

export const Icon = memo(({
  name,
  size = 24,
  title,
  width,
  height,
  ...props
}: IconProps) => {
  const IconComponent = ICONS[name];

  const sizeProps = useMemo(() => ({
    width: width ?? size,
    height: height ?? size
  }), [width, height, size]);

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  if (title) {
    return (
      <IconComponent
        role="img"
        aria-labelledby={`title-${name}`}
        {...sizeProps}
        {...props}
      >
        <title id={`title-${name}`}>{title}</title>
      </IconComponent>
    );
  }

  return (
    <IconComponent
      aria-hidden="true"
      {...sizeProps}
      {...props}
    />
  );
});

Icon.displayName = 'Icon';

export default Icon;