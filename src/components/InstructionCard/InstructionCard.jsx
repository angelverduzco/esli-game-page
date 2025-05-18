import './InstructionCard.css';

function InstructionCard({ title, description, image }) { 
    return (
        <div className="instruction-card">  
            <img src={image} alt={title} className="instruction-card-image" />
            <div className='instruction-card-content'>
                <h3 className="instruction-card-title">{title}</h3>
                <p className="instruction-card-description">{description}</p>
            </div>
        </div>
    );
}

export default InstructionCard;