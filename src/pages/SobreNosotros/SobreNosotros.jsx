import './SobreNosotros.css';
import { MEMBERS } from '../../utils/constants';
import MemberCard from '../../components/MemberCard/MemberCard';

function SobreNosotros() { 
    return (
        <main className='sobre-nosotros'>
            <section className='desc'>
                <h1 className='desc-title'>Sobre nosotros</h1>
                <p className='desc-text'>Somos un grupo apasionado de estudiantes en Ingeniería de Software de 6to semestre de la Facultad de Telemática. Nos encantan los sistemas embebidos, el desarrollo web y desarrollo backend. Nuesto lema de vida es "Calma y elixir".</p>
            </section>
            <section className='members'>
                {MEMBERS.map((member) => (
                    <MemberCard key={member.id} member={ member }></MemberCard>
                ))}
            </section>
        </main>
    )
}

export default SobreNosotros;