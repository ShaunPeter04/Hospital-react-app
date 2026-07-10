import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPatient from './components/RegisterPatient'
import ViewPatients from './components/ViewPatients'
import SearchPatients from './components/SearchPatients'
import DischargePatients from './components/DischargePatients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<RegisterPatient />} />
          <Route path='/search' element={<SearchPatients />} />
          <Route path='/discharge' element={<DischargePatients />} />
          <Route path='/view' element={<ViewPatients />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
