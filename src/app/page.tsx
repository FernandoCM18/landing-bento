import { Typography, Header, Button } from "@/components";
import Image from "next/image";

const avatars = [
  {
    name: "Jenny Wilson",
    position: "Frontend Engineer",
    url: "/assets/images/Avatar-1.png",
  },
  {
    name: "Henry Letham",
    position: "Product Designer",
    url: "/assets/images/Avatar-2.png",
  },
  {
    name: "Franco Jacobs",
    position: "CTO",
    url: "/assets/images/Avatar-3.png",
  },
  {
    name: "Rajitha Gunathilake",
    position: "Backend Engineer",
    url: "/assets/images/Avatar-5.png",
  },
  {
    name: "Kristin Patterson",
    position: "UX Designer",
    url: "/assets/images/Avatar-8.png",
  },
  {
    name: "Cristian Vega",
    position: "Product Manager",
    url: "/assets/images/Avatar-9.png",
  },
];

export default function Home() {
  return (
    <main className="bg-landing px-40 text-center">
      <Header />
      <section className="flex flex-col gap-10 items-center">
        <div>
          <Typography variant="H1" text="Your tasks, simplified" />
          <Typography variant="Subtitle" text="Create, manage, and conquer your to-do lists with ease" />
        </div>
        <div className="space-y-3">
          <Button text="Get started for free" />
          <Typography variant="Small" text="v1.0.1 – macOS 12+" />
        </div>
        <div className="relative">
          {/* TODO: Cambiar la imagen por componentes al tenerlos listos */}
          <Image
            src="/assets/icons/Stars.svg"
            alt="stars"
            width={1120}
            height={640}
            className="absolute top-0 left-0"
          />
          <Image
            src="/assets/images/App-screens.png"
            alt="app-screen"
            width={1120}
            height={504}
            className="relative"
          />
        </div>
      </section>
      <Typography variant="Body" text="Trusted by over 50,000 designers and developers" />
      <div className="flex items-center justify-center mt-6">
        {
          avatars && avatars.map((avatar, index) => (
            <Image
              key={index}
              src={avatar.url}
              alt={avatar.name}
              width={40}
              height={40}
              className="rounded-full -mr-[14px] border-2 border-landing w-10 h-10"
            />
          ))
        }
      </div>
    </main>
  );
}
