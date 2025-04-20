import './JefeCard.css';

function JefeCard({ jefe }) { 
    return (
        <div className='jefe-card'>
            <div className='jefe-div-main'>
                <img className='jefe-img' src={ jefe.image } alt={ jefe.name } />
                <h2 className='jefe-name'>{ jefe.name }</h2>
            </div>
            <div className='jefe-div-info'>
                <h3 className='jefe-subtitle'>Historia</h3>
                <p className='jefe-description'>{jefe.description}</p>
                <h3 className='jefe-subtitle'>Ataques</h3>
                <ul>
                    {jefe.attacks.map((attack, index) => (
                        <li key={index} className='jefe-attack'>{attack}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default JefeCard;