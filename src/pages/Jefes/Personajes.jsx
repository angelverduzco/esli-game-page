import './Jefes.css';
import { PERSONAJES } from '../../utils/constants';
import JefeCard from '../../components/PersonajeCard/CharacterCard';

function Jefes() { 
    return (
        <main className='jefes'>
            <h1 className='jefes-title'>Personajes Principales</h1>
            <p className="jefes-description">Conoce a los personajes con los que te encontrarás en esta inolvidable aventura por rescatar al comandante Esli.</p>
            <section className='jefes-section'>
                {PERSONAJES.map((jefe) => (
                    <JefeCard key={jefe.id} jefe={jefe} />
                ))}
            </section>
        </main>
    )
}

export default Jefes;