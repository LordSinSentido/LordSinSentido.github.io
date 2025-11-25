import Contact from '@/app/_contact/page'
import Jobs from '@/app/_jobs/page'
import Header from '@/app/_header/page'
import Projects from '@/app/_projects/page'
import Skills from '@/app/_skills/page'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className='flex min-h-screen justify-center'>
      <main className='min-h-screen w-full max-w-[1500px] pb-4 md:pb-8'>
        <Header />
        <Skills />
        <Projects />
        <Jobs />
        <Contact />
      </main>
    </div>
  )
}
