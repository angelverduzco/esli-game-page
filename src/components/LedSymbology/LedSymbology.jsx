import './LedSymbology.css'
import Led from '../Led/Led'

function LedSymbology({leds}) { 
    return (
        <section className='led-symbology'>
            <h2 className='led-symbology-title'>Simbología de LEDs</h2>
            <p className='led-symbology-description'>El dispositivo de juego cuenta con indicadores LED que te proporcionan información importante sobre su estado:</p>
            <div className='led-symbology-container'>
            {
                leds.map((led) => (
                    <Led key={led.id} led={led} className='led-symbology-led' style={{backgroundColor: led.color}}/>
                ))
            }
            </div>
        </section>
    )
}

export default LedSymbology;