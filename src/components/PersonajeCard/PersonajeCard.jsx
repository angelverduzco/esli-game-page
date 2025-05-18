import './PersonajeCard.css';

function PersonajeCard({ personaje }) { 
    return (
        <div className='jefe-card'>
            <div className='jefe-div-main'>
                <img className='jefe-img' src={ personaje.image } alt={ personaje.name } />
                <h2 className='jefe-name'>{ personaje.name }</h2>
            </div>
            <div className='jefe-div-info'>
                <h3 className='jefe-subtitle'>Historia</h3>
                <p className='jefe-description'>{personaje.description}</p>
            </div>
        </div>
    )
}

export default PersonajeCard;