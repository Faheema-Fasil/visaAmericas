

import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import QuickLinkPage from './pages/QuickLinkPage'

function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/quick-link" element={<QuickLinkPage/> } />

      </Routes>
    </>
  )
}

export default App
