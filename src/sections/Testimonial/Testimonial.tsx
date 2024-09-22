import { TagLine, Typography } from "@/components"
import Image from "next/image"

export const Testimonial = () => {
  return (
    <div>
      <Image
        src="/assets/images/component-ai-powered-search.png"
        alt="image-ai-powered-search"
        width={336}
        height={336}
        className="mx-auto"
      />
      <div className="space-y-4">
        <TagLine text="testimonials" />
        <Typography variant="H2" text="List. Organize. Conquer." className="gradient-text" />
        <Typography variant="Subtitle" text="Used by seriously productive people." className="text-text-tertiary" />
      </div>
    </div>
  )
}
