import "./App.css"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Header from "./sections/Header"
import Contact from "./sections/Contact"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className='mb-10'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
