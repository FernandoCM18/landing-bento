import Image from "next/image";
import React from "react"

interface Props {
  icon: string;
};

export const CircularIcon = ({ icon }: Props) => {
  return (
    <div className="bg-neutral-neutral-25 p-[10px] rounded-full">
      <Image src={`assets/icons/${icon}`} alt="icon" width={24} height={24} />
    </div>
  )
}
