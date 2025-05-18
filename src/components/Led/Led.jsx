import './Led.css';

function Led({ led }) { 
    return (
        <div className="led">
            <div className="led-color" style={{backgroundColor: led.color, boxShadow: `0 0 20px ${led.color}`}}></div>
            <div className="led-info">
                <h3 className="led-title">{led.name}</h3>
                <p className="led-description">{led.description}</p>
            </div>
        </div>
    );
}

export default Led;