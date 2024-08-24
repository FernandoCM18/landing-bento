import Image from 'next/image'

interface Props {
  avatarUrl: string
  name: string
};

export const Avatar = ({ avatarUrl, name }: Props) => {
  return (
    <Image
      src={avatarUrl}
      alt={name}
      width={40}
      height={40}
      className="rounded-full -mr-[14px] border-2 border-landing w-10 h-10 object-cover"
    />
  )
}
