import Nav from './components//Nav'
import Home from './components/Home'
import Trailer from './components/Trailer'
import About from './components/About'
import Bios from './components/Bios'
import Screenings from './components/Screenings'
import Credits from './components/Credits'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Trailer />
      {/* <About /> */}
      {/* <Bios /> */}
      <Screenings />
      <Credits />
      <Footer />
    </>
  )
}

export default App
