import Image from "next/image"

export const Image2 = () => {
  return (
    <div>
      <Image
        src="/assets/images/frame-1000002308.png"
        alt="image2"
        width={512}
        height={528}
      />
      <Image src="/assets/images/group-105.png" alt="group" width={450} height={72} className="w-full absolute top-[150px] left-[64px] object-none" />
    </div>
  )
}
