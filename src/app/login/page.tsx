'use client'

import { useState } from 'react'
import { loginAction } from './actions'

export default function LoginPage() {
  const [message, setMessage] = useState('')

  async function handleSubmit(e: any) {
    e.preventDefault()

    const formData = new FormData(e.target)

    const res = await loginAction(formData)

    if (res?.error) {
      setMessage(res.error)
    } else {
      setMessage('Login exitoso')
      window.location.href = '/'
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 max-w-sm mx-auto'
    >
      <input
        name='email'
        type='email'
        placeholder='Email'
        className='border p-2'
      />
      <input
        name='password'
        type='password'
        placeholder='Contraseña'
        className='border p-2'
      />

      <button type='submit' className='bg-black text-white py-2'>
        Iniciar sesión
      </button>

      {message && <p className='text-red-500'>{message}</p>}
    </form>
  )
}
