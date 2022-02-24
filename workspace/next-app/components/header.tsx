import type { NextPage } from 'next'
import ToggleDarkModeButton from './ToggleDarkModeButton'

const Header: NextPage = ({ children }) => {
  return (
    <>
      <header>
        {children}
        <ToggleDarkModeButton />
      </header>
    </>
  )
}

export default Header
