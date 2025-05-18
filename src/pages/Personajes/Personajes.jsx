import './Personajes.css';
import { PERSONAJES } from '../../utils/constants';
import PersonajeCard from '../../components/PersonajeCard/PersonajeCard';

function Personajes() { 
    return (
        <main className='jefes'>
            <h1 className='jefes-title'>Personajes Principales</h1>
            <p className="jefes-description">Conoce a los personajes con los que te encontrarás en esta inolvidable aventura por rescatar al comandante Esli.</p>
            <section className='jefes-section'>
                {PERSONAJES.map((personaje) => (
                    <PersonajeCard key={personaje.id} personaje={personaje} />
                ))}
            </section>
        </main>
    )
}

export default Personajes;