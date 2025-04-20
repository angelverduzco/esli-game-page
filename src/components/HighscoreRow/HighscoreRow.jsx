import './HighscoreRow.css';
import { Trophy } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import { secondsToHoursMinutesAndSeconds } from '../../utils/timeUtils';

function HighscoreRow({highscore, rank}) {
    return (
        <tr className='highscore-row'>
            <td className='highscore-cell'>
                <div>
                    {rank <= 3 && (
                        <Trophy className='highscore-icon' color={rank === 1 ? 'gold' : rank === 2 ? 'silver' : 'brown'} size={24} />
                    )}
                    <span>{rank}</span>
                </div>
            </td>
            <td className='highscore-cell'>
                <span>{highscore.gamertag}</span>
            </td>
            <td className='highscore-cell'>
                <span className={rank <= 3 ? (
                    rank === 1 ? 'highscore-gold' : rank === 2 ? 'highscore-silver' : 'highscore-brown'
                ) : ''}>{highscore.points}</span>
            </td>
            <td className='highscore-cell'>
                <span>{highscore.shots}</span>
            </td>
            <td className='highscore-cell'>
                <span>{highscore.destroyedEnemies}</span>
            </td>
            <td className='highscore-cell'>
                <span>{highscore.destroyedBosses}</span>
            </td>
            <td className='highscore-cell'>
                <span>{secondsToHoursMinutesAndSeconds(highscore.gameTime)}</span>
            </td>
            <td className='highscore-cell'>
                <span>{formatDate(highscore.updatedAt)}</span>
            </td>
        </tr>
    )
}

export default HighscoreRow;