import './Highscores.css';
import HighscoresTable from '../../HighscoresTable/HighscoresTable';

const topPlayers = [
    {
      rank: 1,
      gamertag: "ElectroNinja",
      disparos: 1458,
      enemigosDestruidos: 342,
      jefesDestruidos: 3,
      tiempoDeJuego: "04:23:15",
      fecha: "2025-03-28",
      puntosTotales: 15780,
    },
    {
      rank: 2,
      gamertag: "ShadowHunter",
      disparos: 1287,
      enemigosDestruidos: 298,
      jefesDestruidos: 3,
      tiempoDeJuego: "04:45:32",
      fecha: "2025-04-02",
      puntosTotales: 14560,
    },
    {
      rank: 3,
      gamertag: "QuantumQueen",
      disparos: 1532,
      enemigosDestruidos: 315,
      jefesDestruidos: 3,
      tiempoDeJuego: "05:12:08",
      fecha: "2025-03-25",
      puntosTotales: 13950,
    },
    {
      rank: 4,
      gamertag: "CyberWolf",
      disparos: 1689,
      enemigosDestruidos: 287,
      jefesDestruidos: 3,
      tiempoDeJuego: "04:58:41",
      fecha: "2025-04-01",
      puntosTotales: 12870,
    },
    {
      rank: 5,
      gamertag: "NeonBlade",
      disparos: 1345,
      enemigosDestruidos: 276,
      jefesDestruidos: 3,
      tiempoDeJuego: "05:34:22",
      fecha: "2025-03-30",
      puntosTotales: 12340,
    },
    {
      rank: 6,
      gamertag: "VoidWalker",
      disparos: 1478,
      enemigosDestruidos: 265,
      jefesDestruidos: 3,
      tiempoDeJuego: "05:45:18",
      fecha: "2025-03-29",
      puntosTotales: 11980,
    },
    {
      rank: 7,
      gamertag: "TechMage",
      disparos: 1567,
      enemigosDestruidos: 254,
      jefesDestruidos: 3,
      tiempoDeJuego: "06:12:45",
      fecha: "2025-04-03",
      puntosTotales: 11560,
    },
    {
      rank: 8,
      gamertag: "PixelPredator",
      disparos: 1623,
      enemigosDestruidos: 243,
      jefesDestruidos: 3,
      tiempoDeJuego: "05:58:33",
      fecha: "2025-03-27",
      puntosTotales: 10980,
    },
    {
      rank: 9,
      gamertag: "GlitchGladiator",
      disparos: 1789,
      enemigosDestruidos: 232,
      jefesDestruidos: 2,
      tiempoDeJuego: "06:23:17",
      fecha: "2025-04-04",
      puntosTotales: 10450,
    },
    {
      rank: 10,
      gamertag: "ByteBrawler",
      disparos: 1845,
      enemigosDestruidos: 225,
      jefesDestruidos: 2,
      tiempoDeJuego: "06:45:29",
      fecha: "2025-03-26",
      puntosTotales: 9870,
    },
]

function Highscores() {
    return (
        <main className='highscores'>
            <h1 className='highscores-title'>Highscores</h1>
            <p className='highscores-desc'>Los 10 mejores jugadores de Esli: Última Misión</p>
            <section className='highscores-table-container'>
                <HighscoresTable jugadores={ topPlayers }></HighscoresTable>
            </section>
        </main>
    )
}

export default Highscores;