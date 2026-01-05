import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { FirestoreContext } from '@/context/FirestoreContext.tsx'
import { HeadProvider } from 'react-head'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeadProvider>
      <FirestoreContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirestoreContext>
    </HeadProvider>
  </StrictMode>
)
