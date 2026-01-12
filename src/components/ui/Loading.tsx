import { motion } from 'framer-motion'
import Headline from '@/typography/Headline'

export default function Loading() {
  return (
    <div className='flex flex-col items-center mt-10 gap-5'>
      <motion.div
        className='size-15 border-10 border-primary-container border-t-on-primary-container border-t-10 inline-block rounded-full'
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 0.75,
          ease: 'linear'
        }}
      />
      <Headline>Fetching information</Headline>
    </div>
  )
}
