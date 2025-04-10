import './HighscoresTable.css';
import { Target, Trophy, Calendar, Skull, Zap, Timer } from 'lucide-react';
import HighscoreRow from '../components/HighscoreRow/HighscoreRow';

function HighscoresTable({jugadores}) {
    return (
        <table className='highscores-table'>
            <thead className='highscores-table-head'>
                <tr className='highscores-table-row'>
                    <th className='highscores-table-header'>#</th>
                    <th className='highscores-table-header'>Gamertag</th>
                    <th className='highscores-table-header'><div><Target></Target>Disparos</div></th>
                    <th className='highscores-table-header'><div><Zap></Zap>Enemigos eliminados</div></th>
                    <th className='highscores-table-header'><div><Skull></Skull>Jefes eliminados</div></th>
                    <th className='highscores-table-header'><div><Timer></Timer>Tiempo</div></th>
                    <th className='highscores-table-header'><div><Calendar></Calendar>Fecha</div></th>
                    <th className='highscores-table-header'><div><Trophy></Trophy>Puntos</div></th>
                </tr>
            </thead>
            <tbody className='highscores-table-body'>
                {jugadores.map((jugador) => <HighscoreRow jugador={ jugador } />)}
            </tbody>
        </table>
    )
}

export default HighscoresTable;