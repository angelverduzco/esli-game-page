import './Highscores.css';
import HighscoresTable from '../../HighscoresTable/HighscoresTable';
import { useState, useEffect } from 'react';

function Highscores() {

  const [highscores, setHighscores] = useState([]);

  useEffect(() => {
    const fetchHighscores = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/highscores');
        const data = await response.json();
        console.log(data)
        setHighscores(data);
      } catch (error) {
        console.error('Error fetching highscores:', error);
      }
    }

    fetchHighscores();
  }, []);

  return (
      <main className='highscores'>
          <h1 className='highscores-title'>Highscores</h1>
          <p className='highscores-desc'>Los 10 mejores jugadores de Esli: Última Misión</p>
          <section className='highscores-table-container'>
              <HighscoresTable highscores={ highscores }></HighscoresTable>
          </section>
      </main>
  )
}

export default Highscores;