import { CardWithImage, Typography } from "@/components"
import { LogoWithElipse } from "@/components/Logo/LogoWithElipse"

export const KeyFeaturesSection = () => {
  return (
    <section className="flex flex-col items-center relative">
      <LogoWithElipse className="z-[1]" />
      <div className="z-[2] absolute top-[336px] space-y-10">
        <Typography
          variant="H2"
          text="“Finally, a to-do app that doesn't overcomplicate things!”"
          className="gradient-text text-pretty"
        />
        <Typography variant="Title" text="Kohaku – Dribbble" />
      </div>
      <div className="-mt-[72px]">
        <CardWithImage
          title="Lightning fast creation"
          description="Create new lists and add items in seconds with our streamlined interface"
          image="/assets/images/main-frame.png"
        />
      </div>

    </section>
  )
}
