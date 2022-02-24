import type { NextPage } from 'next'
import ToggleDarkModeButton from './ToggleDarkModeButton'

const Header: NextPage = () => {
  return (
    <>
      <header>
        <ToggleDarkModeButton />
      </header>
    </>
  )
}

export default Header
