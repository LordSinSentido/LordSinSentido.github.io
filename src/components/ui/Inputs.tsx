import { animationDuration, animationEase } from '@/lib/constants'
import { AnimatePresence, motion } from 'motion/react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import Text from '../typography/Text'
import Stack from '../layers/Stack'

interface TextInputProps {
  title?: string
  placeholder?: string
  type?: 'email' | 'text'
  error?: string
  register: UseFormRegisterReturn
}

interface AreaInputProps {
  title?: string
  placeholder?: string
  register: UseFormRegisterReturn
  error?: string
}

const initialStyle = {
  backgroundColor: 'var(--color-surface-container-lowest)',
  color: 'var(--color-on-surface)'
}

const whileStyle = {
  backgroundColor: 'var(--color-surface-container-highest)',
  color: 'var(--color-on-surface)'
}

const transition = {
  duration: animationDuration,
  ease: animationEase
}

export function TextInput({
  title,
  type,
  placeholder,
  register,
  error
}: TextInputProps) {
  return (
    <Stack gap='0' className='w-full'>
      {title && (
        <Text className='pb-1' size='sm'>
          {title}
        </Text>
      )}
      <motion.input
        className='font-sans p-2 rounded-lg z-1'
        initial={initialStyle}
        whileFocus={whileStyle}
        transition={transition}
        type={type ?? 'text'}
        placeholder={placeholder ?? ''}
        {...register}
      />
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={transition}
          >
            <Text
              size='xs'
              className='p-2 pt-4 -mt-2 z-0 rounded-b-lg bg-error text-on-error'
            >
              {error}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  )
}

export function AreaInput({
  title,
  placeholder,
  register,
  error
}: AreaInputProps) {
  return (
    <Stack gap='0' className='w-full'>
      {title && (
        <Text className='pb-1' size='sm'>
          {title}
        </Text>
      )}
      <motion.textarea
        className='font-sans p-2 rounded-lg z-1'
        initial={initialStyle}
        whileFocus={whileStyle}
        transition={transition}
        placeholder={placeholder ?? ''}
        {...register}
      />
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={transition}
          >
            <Text
              size='xs'
              className='p-2 pt-4 -mt-2 z-0 rounded-b-lg bg-error text-on-error'
            >
              {error}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  )
}

export default { TextInput, AreaInput }
