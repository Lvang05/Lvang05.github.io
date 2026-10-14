import ThemeToggle from './ThemeToggle'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Header = ({ name, tagline, children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <header className={theme === 'dark' ? 'header dark' : 'header light'}>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <ThemeToggle />
      {children}
    </header>
  )
}

export default Header