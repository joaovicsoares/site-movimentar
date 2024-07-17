import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DonationPage from './pages/DonationPage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ajude-nos' element={<DonationPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
