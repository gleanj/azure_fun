import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import Landing from './Landing.jsx'
import App from './App.jsx'
import Resume from './Resume.jsx'
import './index.css'
import './Landing.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/terminal" element={<App />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)