import { Card, TagLine, TaskGroup, Typography } from "@/components"
import { steps } from "@/data/steps";

export const HowItWorkSection = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-[493px]">
        <TagLine text="How it works" />
        <Typography
          variant="H2"
          text="Three simple steps to organized bliss"
          className={`
            gradient-text
            text-pretty
            mb-16
          `}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <TaskGroup />
        <div className="grid grid-cols-3 gap-5 justify-center items-center">
          {
            steps.map((step) => (
              <Card
                key={step.id}
                image={step.image!}
                title={step.title}
                description={step.description}
                number={step.id}
              />
            ))
          }
        </div>

      </div>

    </section>
  )
}
