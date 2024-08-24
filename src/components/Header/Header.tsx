import { Button, Logo } from "@/components";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 w-full">
      <Logo />
      <Button text="Download" />
    </header>
  )
}
