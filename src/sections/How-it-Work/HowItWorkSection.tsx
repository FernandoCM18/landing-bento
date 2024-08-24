import { TagLine, TaskGroup, Typography } from "@/components"

export const HowItWorkSection = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-[493px]">
        <TagLine text="How it works" />
        <Typography
          variant="H2"
          text="Three simple steps to organized bliss"
          className={`
          bg-[linear-gradient(93deg,rgba(248,248,248,0.90)0.1%,rgba(248,248,248,0.50)100.1%)] bg-clip-text text-transparent
          text-pretty
          mb-16
        `}
        />
      </div>
      <TaskGroup />

    </section>
  )
}
