import Header from './components/Header/Header'
import Inicio from './pages/Inicio/Inicio'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import SobreNosotros from './pages/SobreNosotros/SobreNosotros'
import Highscores from './pages/Highscores/Highscores'
import Agradecimientos from './pages/Agradecimientos/Agradecimientos'
import Instrucciones from './pages/Instrucciones/Instrucciones'
import Personajes from './pages/Personajes/Personajes'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Inicio />} />
          <Route path="/instrucciones" element={<Instrucciones />} />
          <Route path='/highscores' element={<Highscores />}></Route>
          <Route path='/personajes' element={<Personajes />}></Route>
          <Route path='/sobre-nosotros' element={<SobreNosotros />}></Route>
          <Route path='/agradecimientos' element={<Agradecimientos />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
