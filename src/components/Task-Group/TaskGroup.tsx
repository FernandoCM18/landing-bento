import { JSX, SVGProps } from "react";

export const TaskGroup = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg width="762" height="49" viewBox="0 0 762 49" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M381.25 49V25C381.25 11.7452 391.995 1 405.25 1H761.25" stroke="url(#paint0_linear_35_6369)" strokeOpacity="0.1" strokeWidth="1.5" />
      <path d="M380.75 49V25C380.75 11.7452 370.005 1 356.75 1H0.749993" stroke="url(#paint1_linear_35_6369)" strokeOpacity="0.1" strokeWidth="1.5" />
      <defs>
        <linearGradient id="paint0_linear_35_6369" x1="381.25" y1="25" x2="761.25" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#929292" />
          <stop offset="1" stopColor="#F8F8F8" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="paint1_linear_35_6369" x1="380.75" y1="25" x2="0.75" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#929292" />
          <stop offset="1" stopColor="#F8F8F8" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

