import './App.css'
import Projects from './sections/Projects'
import Header from './sections/Header'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'
import Experience from './sections/Experience'
import Skills from './sections/Skills'

function App() {
  return (
    <div className='flex justify-center'>
      <main className='w-full max-w-[1500px] flex-none pb-20'>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
