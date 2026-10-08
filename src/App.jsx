import { useState } from 'react'

import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import './App.css'
import GitHubCorner from './Components/GitHubCorner'
import HobbyList from './Components/HobbyList'

const App = () => {
  const [theme, setTheme] = useState('light')

  const onToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={theme === 'dark' ? 'app dark' : 'app light'}>
      <GitHubCorner theme={theme} />
      <Header
        name="Leon Vang"
        tagline="Web Developer"
        theme={theme}
        onToggleTheme={onToggleTheme}
      >
        <Nav theme={theme} />
      </Header>
      <main className={theme === 'dark' ? 'main dark' : 'main light'}>
        <section>
          <h2>About Me</h2>
          <p>Hello, My name is Leon - I am a web development student at Fox Valley Technical College.</p>
        </section>
        <section>
          <HobbyList theme={theme} />
        </section>
      </main>
      <Footer theme={theme} />
    </div>
  )
}

export default App