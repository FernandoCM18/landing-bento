import { Button } from "../Button/Button"
import Logo from "./Logo"

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 min-w-[944px] max-w-[1280px]">
      <Logo />
      <Button text="Download" />
    </header>
  )
}
