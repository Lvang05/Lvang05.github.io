import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import './App.css'
import GitHubCorner from './Components/GitHubCorner'
import HobbyList from './Components/HobbyList'

const App = () => {

  return (
    <div className="app">
      <GitHubCorner />
      <Header name="Leon Vang" tagline="Web Developer">
        <Nav />
      </Header>
      <main>
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