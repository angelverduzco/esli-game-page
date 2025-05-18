import './Instrucciones.css'
import { INSTRUCCIONES, LEDS } from '../../utils/constants'
import InstructionCard from '../../components/InstructionCard/InstructionCard'
import LedSymbology from '../../components/LedSymbology/LedSymbology'

function Instrucciones() { 
    return (
        <main className='instrucciones'>
            <h1 className='instrucciones-title'>Instrucciones</h1>
            <p className='instrucciones-description'>Aprende a combatir y navegar para convertirte en el mejor combatiente de la galaxia</p>
            <section className='instrucciones-section'>
                {INSTRUCCIONES.map((instruccion) => (
                    <InstructionCard key={instruccion.id} title={instruccion.title} description={instruccion.description} image={instruccion.image} />
                ))}
            </section>
            <LedSymbology leds={LEDS}/>
        </main>
    )
}

export default Instrucciones;