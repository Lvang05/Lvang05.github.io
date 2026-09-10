import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import './App.css'
import GitHubCorner from './Components/GitHubCorner'
import StarRating from './Components/StarRating'

const App = () => {
  const hobbies = [
    { name: 'Watching Football', initialRating: 0 },
    { name: 'Playing Pickleball', initialRating: 0 },
    { name: 'Playing Video Games', initialRating: 0 },
    { name: 'Playing Golf', initialRating: 0 },
  ]

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
          <h2>Favorite Hobbies</h2>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>{hobby.name}</span>
                <StarRating initialRating={hobby.initialRating} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App