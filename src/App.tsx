import './App.css'
import { AnimatePresence, motion } from 'motion/react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { animationDuration, animationEase } from '@/lib/constants'
import Home from '@/pages/Home'
import Navigation from '@/ui/Navigation'
import Jobs from '@/pages/Jobs'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      initial: { opacity: 0, y: '1rem' },
      animate: { opacity: 1, y: 0 }
    }}
    initial='initial'
    animate='animate'
    exit='initial'
    transition={{ duration: animationDuration, ease: animationEase }}
  >
    {children}
  </motion.div>
)

function App() {
  const location = useLocation()

  return (
    <>
      <Navigation />
      <main className='h-full max-w-480 pb-10 scrollbar-none scrollbar-hide p-4 mt-18'>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route
              path='/'
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path='/experience'
              element={
                <PageTransition>
                  <Jobs />
                </PageTransition>
              }
            />
            <Route
              path='/projects'
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path='/contact'
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  )
}

export default App
