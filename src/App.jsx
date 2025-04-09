import Header from './components/Header/Header'
import Inicio from './pages/Inicio/Inicio'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import Jefes from './pages/Jefes/Jefes'
import SobreNosotros from './pages/SobreNosotros/SobreNosotros'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Inicio />} />
          <Route path='/jefes' element={<Jefes />}></Route>
          <Route path='/sobre-nosotros' element={<SobreNosotros />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
