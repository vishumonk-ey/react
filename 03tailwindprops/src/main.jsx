import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './card.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card title="first card" btnText="click on first card"/>
    <Card title="second card" />
  </StrictMode>,
)
