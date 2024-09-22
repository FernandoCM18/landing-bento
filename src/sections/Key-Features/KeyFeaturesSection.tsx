import { CardWithImage, Typography } from "@/components"
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
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z" fill="#F8F8F8" fillOpacity="0.7" />
            </svg>
          }
        >
          <Image1 />
        </CardWithImage>
        <CardWithImage
          title="Intuitive organization"
          description="Drag, drop, and rearrange items effortlessly to keep your lists perfectly ordered"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.75 16.75H20.25M11.75 7.25H20.25M6.25 9.75V4.75L3.75 6.5M4 14.9318C4 14.9318 4.72373 14.25 5.60886 14.25C6.494 14.25 7.21154 14.8719 7.21154 15.639C7.21154 17.4385 3.75 17.75 3.75 19.25H7.5" stroke="#F8F8F8" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        >
          <Image2 />
        </CardWithImage>
        <CardWithImage
          title="Cross-device sync"
          description="Access your lists anywhere, anytime - seamlessly synced across all your devices"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 6.25C3.75 4.86929 4.86929 3.75 6.25 3.75H17.75C19.1307 3.75 20.25 4.86929 20.25 6.25V16.75H3.75V6.25Z" stroke="#F8F8F8" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />
              <path d="M1.75 16.75H22.25V17.75C22.25 19.1307 21.1307 20.25 19.75 20.25H4.25C2.86929 20.25 1.75 19.1307 1.75 17.75V16.75Z" stroke="#F8F8F8" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
          }
        >
          <Image3 />
        </CardWithImage>
      </div>

    </section>
  )
}
