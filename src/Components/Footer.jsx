import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <footer className={theme === 'dark' ? 'footer dark' : 'footer light'}>
      <p>&copy; 2026 Leon Vang. All rights reserved.</p>
      <p>Contact: 300100898@fvtc.edu</p>
      <a href="#">GitHub</a>
    </footer>
  )
}

export default Footer