export const JEFES = [
    {
      id: "lord-chispas",
      name: "Lord Funken",
      image: "/images/bosses/lord-chispas.png",
      description:
        "Antes de ser conocido como Lord Chispas, su nombre era Kael Vortan, un brillante ingeniero y piloto en el sistema Zynex. Dedicó su vida a desarrollar tecnología energética que ayudaría a salvar a su planeta de una inminente extinción energética. Pero su investigación fue robada por el Alto Consejo Galáctico, que la utilizó para alimentar armas destructivas. Traicionado y humillado, Kael intentó sabotear el proyecto, pero fue atrapado en una explosión de antimateria que lo fusionó con su propia tecnología. Su cuerpo ahora irradia energía pura. Su mente, consumida por el rencor, se convirtió en una tormenta ambulante. Se unió a la Tecnomatrix como su general de asalto, prometiendo que la galaxia conocería el verdadero poder de un rayo traicionado.",
      attacks: [
        "Tormenta de Neutrinos: Dispara rayos de plasma en todas direcciones, electrificando el suelo y dificultando el movimiento.",
        "Flash: Se teletransporta en diferentes direcciones.",
        "Red de Relámpagos: Crea orbes de electricidad conectados por rayos que flotan por la arena, atrapando al jugador.",
        "Last chance: Al quedar con poca vida, desata un rayo gigante que cubre toda la pantalla, obligando al jugador a esquivar en el momento exacto.",
      ],
    },
    {
      id: "vuv-ulubu",
      name: "VuV-Ulubu",
      image: "/images/bosses/vuv-ulubu.png",
      description:
        "VuV-Ulubu no nació... fue invocado. Durante una expedición arqueológica en el planeta prohibido Y'ghorr, la Tecnomatrix descubrió una cripta ancestral que contenía un ser sellado fuera del flujo del tiempo. Ignorando las advertencias, los científicos rompieron el sello... y desataron el horror. VuV-Ubulubu era una entidad interdimensional, un parásito cósmico que se alimenta de miedo, carne y recuerdos. Infectó a toda la tripulación en minutos y usó sus cuerpos para tomar forma física. Desde entonces, ha viajado con la Tecnomatrix, siendo su arma biológica más inestable, una aberración que ni ellos pueden controlar completamente.",
      attacks: [
        "Ola de Corrupción:  Expulsa un líquido viscoso que ralentiza y drena la vida del jugador.",
        "Garras del Vacío: Sus extremidades se alargan y atraviesan el suelo, saliendo en puntos aleatorios para atacar.",
        "Reformación Carnosa: Al quedar con 10% de vida, su cuerpo se regenera a  un 50% de vida, volviéndose más fuerte y agresivo.",
      ],
    },
    {
      id: "tronica",
      name: "Tronica",
      image: "/images/bosses/tronica.png",
      description:
        "Troncia comenzó como un proyecto pacífico: una IA avanzada diseñada para gobernar y proteger colonias automatizadas. Su núcleo estaba basado en la psique de una comandante real, reconocida por su liderazgo y eficiencia. Pero durante una guerra interplanetaria, la Tecnomatrix secuestró el proyecto y lo reprogramó para convertirse en una unidad de control totalitario, sin emociones, sin ética, solo obediencia. La copia digital de la mente de la comandante intentó resistirse... pero fue corrompida por los nuevos protocolos. Ahora, Tronica es la máxima autoridad digital de la Tecnomatrix. Un ser que cree que la galaxia debe ser purgada de caos y error, y que la única forma de lograrlo es erradicando toda forma de pensamiento impredecible… como tú.",
      attacks: [
        "Rasho laser: Láser que disparan en patrones sincronizados, obligando al jugador a moverse estratégicamente.",
        "Matriz de Códigos Corruptos: Hackea el sistema del jugador, haciendo que sus controles se invierten temporalmente o que sus armas fallen.",
        "Autodestrucción Programada: Cuando está al borde de la derrota, activa una cuenta regresiva y desata una explosión masiva. El jugador debe vencerla antes de que el tiempo se acabe o morir en la detonación.",
      ],
    },
]
  
export const MEMBERS = [
  {
    id: "hanzeel",
    name: "Hanzeel Villa",
    image: "/images/members/hanzeel.webp",
    description: "Historia, desarrollo del videojuego y de la API.",
    social_media: {
      linkedin: "https://www.linkedin.com/in/hanzeelvilla/",
      github: "https://github.com/hanzeelvilla",
    }
  },
  {
    id: "carlos",
    name: "Carlos Herrera",
    image: "/images/members/carlos.webp",
    description: "Desarrollo del videojuego y diseño de personajes.",
    social_media: {
      linkedin: "https://www.linkedin.com/in/hanzeelvilla/",
      github: "https://github.com/cherrera8",
    }
  },
  {
    id: "angel",
    name: "Angel Verduzco",
    image: "/images/members/angel.webp",
    description: "Desarrollo de la página web y de la API.",
    social_media: {
      linkedin: "https://www.linkedin.com/in/angelverduzco/",
      github: "https://github.com/angelverduzco",
    }
  }
];

export const INSTRUCCIONES = [
  {
    id: "instruccion-1",
    title: "Mueve a Esli",
    description: "Usa las teclas WASD o las flechas del teclado para mover a Esli por el mapa.",
    image: "https://i.blogs.es/b9c60e/konami-code/1366_2000.jpg",
  },
  {
    id: "instruccion-2",
    title: "Ataca a los enemigos",
    description: "Usa la tecla 'Espacio' para atacar a los enemigos y eliminar",
    image: "https://img.freepik.com/foto-gratis/tarjeta-plantilla-informe-papel-suave_1258-167.jpg?semt=ais_hybrid&w=740"
  },
  {
    id: "instruccion-3",
    title: "Ataca a los enemigos",
    description: "Usa la tecla 'Espacio' para atacar a los enemigos y eliminar",
    image: "https://i.blogs.es/b9c60e/konami-code/1366_2000.jpg"
  }
]

export const LEDS = [
  {
    id: "led-1",
    name: "LED Rojo",
    color: "#ef4444",
    description: "Indica que el dispositivo está encendido.",
  },
  {
    id: "led-2",
    name: "LED Azul",
    color: "#3b82f6",
    description: "Indica que el dispositivo esta conectado a Internet",
  },
  {
    id: "led-3",
    name: "LED Amarillo",
    color: "#eab308",
    description: "Indica que la batería del dispositivo está baja.",
  }
]