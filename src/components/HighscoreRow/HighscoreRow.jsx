import './HighscoreRow.css';
import { Trophy } from 'lucide-react';

function HighscoreRow({jugador}) {
    return (
        <tr className='highscore-row'>
            <td className='highscore-cell'>
                <div>
                    {jugador.rank <= 3 && (
                        <Trophy className='highscore-icon' color={jugador.rank === 1 ? 'gold' : jugador.rank === 2 ? 'silver' : 'brown'} size={24} />
                    )}
                    <span>{jugador.rank}</span>
                </div>
            </td>
            <td className='highscore-cell'>
                <span>{jugador.gamertag}</span>
            </td>
            <td className='highscore-cell'>
                <span>{jugador.disparos}</span>
            </td>
            <td className='highscore-cell'>
                <span>{jugador.enemigosDestruidos}</span>
            </td>
            <td className='highscore-cell'>
                <span>{jugador.jefesDestruidos}</span>
            </td>
            <td className='highscore-cell'>
                <span>{jugador.tiempoDeJuego}</span>
            </td>
            <td className='highscore-cell'>
                <span>{jugador.fecha}</span>
            </td>
            <td className='highscore-cell'>
                <span className={jugador.rank <= 3 ? (
                    jugador.rank === 1 ? 'highscore-gold' : jugador.rank === 2 ? 'highscore-silver' : 'highscore-brown'
                ) : ''}>{jugador.puntosTotales}</span>
            </td>
        </tr>
    )
}

export default HighscoreRow;