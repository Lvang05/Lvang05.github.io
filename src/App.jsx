import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import './App.css'
import GitHubCorner from './Components/GitHubCorner'
import HobbyList from './Components/HobbyList'
import SectionControls from './Components/SectionControls'
import { SectionProvider, SectionContext } from './contexts/SectionContext'
import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <SectionProvider>
      <div className={theme === 'dark' ? 'app dark' : 'app light'}>
        <GitHubCorner />
        <Header
          name="Leon Vang"
          tagline="Web Developer"
        >
          <Nav />
        </Header>

        <SectionControls />

        <SectionContent theme={theme} />

        <Footer />
      </div>
    </SectionProvider>
  )
}

const SectionContent = ({ theme }) => {
  const { sections } = useContext(SectionContext)

  return (
    <main className={theme === 'dark' ? 'main dark' : 'main light'}>
      {sections.showAbout && (
        <section>
          <h2>About Me</h2>
          <p>Hello, My name is Leon - I am a web development student at Fox Valley Technical College.</p>
        </section>
      )}

      {sections.showFavorites && (
        <section>
          <HobbyList />
        </section>
      )}

      {sections.showContact && (
        <section>
          <h2>Contact</h2>
          <p>Email: 300100898@fvtc.edu</p>
          <p>GitHub: <a href="#">lvang05</a></p>
        </section>
      )}
    </main>
  )
}

export default App