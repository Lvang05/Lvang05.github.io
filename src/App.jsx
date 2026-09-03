import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import './App.css'

const App = () => {
  const hobbies = [
    'Watching Football',
    'Playing Pickleball',
    'Playing Video Games',
    'Playing Golf',
  ]

  return (
    <div className="app">
      <Header name="Leon Vang" tagline="Web Developer">
        <Nav />
      </Header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Hello, My name is Leon - I am a web development student at Fox Valley Technical College.</p>
        </section>
        <section>
          <h2>Favorite Hobbies</h2>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
