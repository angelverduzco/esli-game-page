import './MemberCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function MemberCard({ member }) { // Desestructuramos los props
    return (
        <div className='member'>
            <img src={member.image} alt={member.name} className='member-image' />
            <h2 className='member-name'>{member.name}</h2>
            <p className='member-description'>{member.description}</p>
            <div className='social-media'>
                {member.social_media?.linkedin && (
                    <a href={member.social_media.linkedin} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} className='icon'/>
                    </a>
                )}
                {member.social_media?.github && (
                    <a href={member.social_media.github} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} className='icon' />
                    </a>
                )}
            </div>
        </div>
    );
}

export default MemberCard;