import './HighscoresTable.css';
import { Target, Trophy, Calendar, Skull, Zap, Timer } from 'lucide-react';
import HighscoreRow from '../HighscoreRow/HighscoreRow';

function HighscoresTable({highscores}) {
    return (
        <table className='highscores-table'>
            <thead className='highscores-table-head'>
                <tr className='highscores-table-row'>
                    <th className='highscores-table-header'>#</th>
                    <th className='highscores-table-header'>Gamertag</th>
                    <th className='highscores-table-header'><div><Trophy></Trophy>Puntos</div></th>
                    <th className='highscores-table-header'><div><Target></Target>Disparos</div></th>
                    <th className='highscores-table-header'><div><Zap></Zap>Enemigos eliminados</div></th>
                    <th className='highscores-table-header'><div><Skull></Skull>Jefes eliminados</div></th>
                    <th className='highscores-table-header'><div><Timer></Timer>Tiempo</div></th>
                    <th className='highscores-table-header'><div><Calendar></Calendar>Fecha</div></th>
                </tr>
            </thead>
            <tbody className='highscores-table-body'>
                {highscores.map((highscore, index) => <HighscoreRow key={highscore.gamertag + index} highscore={highscore} rank={ index + 1 } />)}
            </tbody>
        </table>
    )
}

export default HighscoresTable;