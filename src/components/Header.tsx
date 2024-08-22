import { Button } from "./Button/Button"
import Logo from "./Logo"

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Button text="Download" />
    </header>
  )
}
