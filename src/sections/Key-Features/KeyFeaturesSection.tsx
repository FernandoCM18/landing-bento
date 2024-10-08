import { CardWithImage, Icon, Typography } from "@/components"
import { LogoWithElipse } from "@/components/Logo/LogoWithElipse"
import { Image1 } from "./images/image1/Image1"
import { Image2 } from "./images/image2/Image2"
import { Image3 } from "./images/image3/Image3"

export const KeyFeaturesSection = () => {
  return (
    <section className="flex flex-col items-center relative">
      <LogoWithElipse className="z-[1]" />
      <div className="z-[2] absolute top-[336px] space-y-10">
        <Typography
          variant="H2"
          text="“Finally, a to-do app that doesn't overcomplicate things!”"
          className="gradient-text text-pretty max-w-[960px]"
        />
        <Typography variant="Title" text="Kohaku – Dribbble" />
      </div>
      <div className="-mt-[72px] space-y-5">
        <CardWithImage
          title="Lightning fast creation"
          description="Create new lists and add items in seconds with our streamlined interface"
          icon={<Icon name="plus" />}
        >
          <Image1 />
        </CardWithImage>
        <CardWithImage
          title="Intuitive organization"
          description="Drag, drop, and rearrange items effortlessly to keep your lists perfectly ordered"
          icon={<Icon name="numberList" />}
        >
          <Image2 />
        </CardWithImage>
        <CardWithImage
          title="Cross-device sync"
          description="Access your lists anywhere, anytime - seamlessly synced across all your devices"
          icon={<Icon name="macbook" />}
        >
          <Image3 />
        </CardWithImage>
      </div>

    </section>
  )
}
