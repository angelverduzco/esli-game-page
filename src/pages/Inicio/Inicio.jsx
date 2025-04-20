import './Inicio.css';
import '@justinribeiro/lite-youtube';

function Inicio() {
    return (
        <main className='inicio'>
            <section className='inicio-welcome'>
                <h1 className='inicio-welcome-title'>Esli: Última Misión</h1>
                <p className="inicio-welcome-text">La aventura final que definirá el destino del comandante Esli</p>
            </section>
            <section className='inicio-trailer'> 
                <h3 className='inicio-trailer-title'>Trailer oficial</h3>
                <lite-youtube videoid="OhNwckCLzis" className="inicio-trailer-video"></lite-youtube>
                <p className="inicio-trailer-text">Experimenta la épica aventura del rescate del comandante Esli</p>
            </section>
            <section className='inicio-historia'>
                <h3 className="inicio-historia-title">La Historia</h3>
                <p className="inicio-historia-text">Eres miembro de la tripulación del comandante Esli, un humilde pero valeroso navío espacial dedicado a ayudar a quienes más lo necesitan sin pedir nada a cambio. Bajo el liderazgo del comandante Esli, recorrían los rincones más oscuros de la galaxia, desafiando la injusticia y ofreciendo esperanza a quienes habían sido olvidados por el resto del universo.<br /> <br />
                    Pero su noble causa los llevó a convertirse en enemigos de la Tecnomatrix, una despiadada armada de mercenarios y piratas espaciales que lucran con el sufrimiento de otros. En un ataque sorpresa, la Tecnomatrix cayó sobre Esli con todo su poderío, destrozando el casco de la nave y exterminando a cada uno de sus valientes tripulantes… excepto a ti.<br /> <br />
                    Sobreviviste de milagro, flotando a la deriva entre los restos de tu hogar, con la certeza de que todo estaba perdido. Con el tiempo, reconstruiste tu vida en los márgenes del cosmos, viviendo con el peso de la culpa y la furia de la venganza. <br /> <br />
                    Hasta que un día, una transmisión codificada llegó a tu receptor de emergencia. <br /> <br />
                    El mensaje era claro, aunque débil y entrecortado: <strong>“Sigo vivo”</strong>. <br /> <br />
                    El comandante Esli estaba prisionero en un sector desconocido, probablemente en las garras de la Tecnomatrix. <br /> <br />
                    Ahora, con un nuevo propósito ardiendo en tu pecho, te lanzas de vuelta al vacío, armado solo con tu ingenio, tus habilidades y la determinación de rescatar al hombre que alguna vez te dio un hogar. <br /> <br />
                    No importa quién se interponga en tu camino. <br /> <br />
                    No importa cuántos sistemas solares tengas que atravesar. <br /> <br />
                    No importa si la galaxia entera se vuelve en tu contra. <br /> <br />
                    Porque esta vez, no habrá redención. Solo justicia.
                </p>
            </section>
        </main>
    )
}

export default Inicio;