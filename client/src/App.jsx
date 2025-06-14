

import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import QuickLinkPage from './pages/QuickLinkPage'
import Service1 from './pages/ServicesPages/Service1'

function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/quick-link" element={<QuickLinkPage/> } />
        <Route path="/service1" element={<Service1 />} />

      </Routes>
    </>
  )
}

export default App
