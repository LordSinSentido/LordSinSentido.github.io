import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { FirestoreContext } from './lib/FirestoreContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirestoreContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirestoreContext>
  </StrictMode>
)
