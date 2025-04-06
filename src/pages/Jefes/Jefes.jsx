import './Jefes.css';
import { JEFES } from '../../utils/constants';
import JefeCard from '../../components/JefeCard/JefeCard';

function Jefes() { 
    return (
        <main className='jefes'>
            <h1 className='jefes-title'>Jefes Principales</h1>
            <p className="jefes-description">Conoce a los temibles adversarios que deberás enfrentar para rescatar al comandante Esli</p>
            <section className='jefes-section'>
                {JEFES.map((jefe) => (
                    <JefeCard key={jefe.id} jefe={jefe} />
                ))}
            </section>
        </main>
    )
}

export default Jefes;