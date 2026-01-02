import './App.css'
import Header from '@/sections/Header'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Jobs from '@/sections/Jobs'
import Contact from '@/sections/Contact'
import Navbar from '@/sections/Navbar'

function App() {
  return (
    <main className='flex items-center justify-center pb-40'>
      <div className='flex flex-col items-center min-h-screen w-full max-w-374 pb-4 md:pb-8'>
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Jobs />
        <Contact />
      </div>
    </main>
  )
}

export default App
