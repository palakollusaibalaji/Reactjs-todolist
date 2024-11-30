import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Final from './final'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Final />
  </StrictMode>,
)
