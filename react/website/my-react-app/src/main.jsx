import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const myele = (

  <>
    <p>hello whats up every body</p>
    <a href="https://google.com">helooooo</a>
  </>

);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  myele 
)
