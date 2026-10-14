import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import './App.css'
import GitHubCorner from './Components/GitHubCorner'
import HobbyList from './Components/HobbyList'
import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme === 'dark' ? 'app dark' : 'app light'}>
      <GitHubCorner />
      <Header
        name="Leon Vang"
        tagline="Web Developer"
      >
        <Nav />
      </Header>
      <main className={theme === 'dark' ? 'main dark' : 'main light'}>
        <section>
          <h2>About Me</h2>
          <p>Hello, My name is Leon - I am a web development student at Fox Valley Technical College.</p>
        </section>
        <section>
          <HobbyList />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App