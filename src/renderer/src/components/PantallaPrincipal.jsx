import { motion } from 'motion/react'
import Card from './Card';


function PantallaPrincipal() {

    return (
        //Fondo
        <div className="atardecer z-0" >
            {/* Cuerpo Celeste del fondo*/}
            <motion.div className='cuerpo-celeste z-0'
                animate={{ // Animacion del sol a luna y viceversa
                    y: [220, 200, 150, 140, 140, 150, 200, 220],
                    x: [0, 40, 80, 120, 160, 180, 200, 240, 280, 320, 360],
                    background: [
                        "radial-gradient(#fff9c4, #fff176, #fbc02d)",  // Sol brillante
                        "radial-gradient(#f7e75d, #f0c24f, #f4a11a)",  // Mañana cálida
                        "radial-gradient(#e3c290, #e9b85e, #e17a2b)",  // Tarde
                        "radial-gradient(#d1a037, #d2874f, #c85f3b)",  // Atardecer cálido
                        "radial-gradient(#c2c0a1, #c79b6e, #d1a67a)",  // Atardecer suave
                        "radial-gradient(#a5a6b0, #a4a28c, #787d91)",  // Atardecer oscuro
                        "radial-gradient(#a4a7b0, #7d7c8e, #686f78)",  // Noche temprana
                        "radial-gradient(#7f7f8f, #585c6b, #4c4f5a)",  // Noche profunda
                        "radial-gradient(#6f6f78, #43474e, #313437)",  // Noche avanzada
                        "radial-gradient(#505254, #36393e, #2b2e32)",  // Noche final
                    ],
                    boxShadow: [
                        "0px 0px 30px 2px #f4e75d",  // Sombra para el sol
                        "0px 0px 40px 5px #f0b047",  // Sombra para la mañana
                        "0px 0px 50px 5px #f4c85b",  // Sombra para la tarde
                        "0px 0px 60px 5px #e78a3c",  // Sombra para el atardecer
                        "0px 0px 70px 7px #d5b46b",  // Sombra para el atardecer suave
                        "0px 0px 80px 10px #c6a35a",  // Sombra para el atardecer oscuro
                        "0px 0px 90px 10px #8c8e9b",  // Sombra para la noche temprana
                        "0px 0px 100px 10px #63646a",  // Sombra para la noche profunda
                        "0px 0px 110px 10px #53555a",  // Sombra para la noche avanzada
                        "0px 0px 120px 15px #444748",  // Sombra para la noche final
                    ],
                    borderColor: [
                        "#f4e75d",  // Borde amarillo (sol brillante)
                        "#f0c24f",  // Borde cálido (mañana)
                        "#e9b85e",  // Borde naranja (tarde)
                        "#e78a3c",  // Borde atardecer
                        "#d5b46b",  // Borde suave (al caer la noche)
                        "#b0b7a5",  // Borde frío (noche temprana)
                        "#8c8e9b",  // Borde noche profunda
                        "#63646a",  // Borde noche avanzada
                        "#444748",  // Borde noche final
                        "#2b2e32",  // Borde final (noche oscura)
                    ],
                }}
                transition={{
                    duration: 540,  // Duración total de la animación
                    repeat: Infinity,  // Repetir infinitamente
                    ease: 'linear',
                }}
            >
            </motion.div>

            {/* Carta con la información del clima */}
            <Card></Card>



        </div >
    );

}

export default PantallaPrincipal;