import './HighscoreRow.css';
import { Trophy } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import { secondsToHoursMinutesAndSeconds } from '../../utils/timeUtils';

function HighscoreRow({highscore}) {
    return (
        <tr className='highscore-row'>
            <td className='highscore-cell'>
                <div>
                    {highscore.rank <= 3 && (
                        <Trophy className='highscore-icon' color={highscore.rank === 1 ? 'gold' : highscore.rank === 2 ? 'silver' : 'brown'} size={24} />
                    )}
                    <span>{highscore.rank}</span>
                </div>
            </td>
            <td className='highscore-cell'>
                <span>{highscore.gamertag}</span>
            </td>
            <td className='highscore-cell'>
                <span className={highscore.rank <= 3 ? (
                    highscore.rank === 1 ? 'highscore-gold' : highscore.rank === 2 ? 'highscore-silver' : 'highscore-brown'
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