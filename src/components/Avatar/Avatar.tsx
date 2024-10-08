import Image from 'next/image'

interface Props {
  avatarUrl: string
  name: string
  width?: number
  height?: number
};

export const Avatar = ({ avatarUrl, name, width = 40, height = 40 }: Props) => {
  return (
    <Image
      src={avatarUrl}
      alt={name}
      width={width}
      height={height}
      className="rounded-full -mr-[14px] border-2 border-landing object-cover"
    />
  )
}
