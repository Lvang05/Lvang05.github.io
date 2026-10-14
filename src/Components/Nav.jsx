import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Nav = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <nav className={theme === 'dark' ? 'nav dark' : 'nav light'}>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
      </ul>
    </nav>
  )
}

export default Nav