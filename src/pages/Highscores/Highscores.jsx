import './Highscores.css';
import HighscoresTable from '../../components/HighscoresTable/HighscoresTable';
import Button from '../../components/Button/Button';
import { useHighscores } from '../../hooks/useHighscores';


function Highscores() {

  const { highscores, refreshHighscores } = useHighscores();

  const handleClick = () => {
    refreshHighscores();
  }

  return (
    <main className='highscores'>
        <h1 className='highscores-title'>Highscores</h1>
        <p className='highscores-desc'>Los 10 mejores jugadores de Esli: Última Misión</p>
        <section className='highscores-table-container'>
          {highscores.length === 0 ? <div className='highscores-loading'>Cargando puntuaciones...</div> : <><HighscoresTable highscores={highscores}></HighscoresTable><Button onClick={handleClick}>Actualizar highscores</Button></>}
          
        </section>
    </main>
  )
}

export default Highscores;