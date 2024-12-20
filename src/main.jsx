import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'

console.log = () => {}
console.error = () => {}
console.warn = () => {}
console.info = () => {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={
      <div className="flex items-center justify-center w-screen h-screen">
        <div className ="spinnerMain">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
