import Versions from './components/Versions'
import './assets/main.css'
import { motion } from 'motion/react'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  const cerrarVentana = () => { window.electron.ipcRenderer.send('accion', 'cerrar-ventana') }
  const minimizarVentana = () => { window.electron.ipcRenderer.send('accion', 'minimizar-ventana') }

  return (
    <>
      <div className='w-full bg-[#ddb683] flex relative z-9999 items-center gap-3 on-drag select-none'>
        <li className='p-2 text-[#ffffff] font-semibold text-lg grow list-none  '>CLIMA APP</li>
        <li onClick={minimizarVentana} className='text-gray-200 px-3 p-1 rounded list-none hover:text-gray-500 hover:cursor-pointer no-drag font-extrabold'>-</li>
        <li onClick={cerrarVentana} className='text-gray-200 px-3 p-1 rounded list-none mr-3 hover:cursor-pointer hover:text-red-500 no-drag font-bold'>X</li>
      </div>

      <spline-viewer url="https://prod.spline.design/9bvnuxupWp7StjX4/scene.splinecode"></spline-viewer>
      <motion.main className="dia z-0">
        <motion.div className='sol z-0'


          animate={{
            y: [100, 20, 100, 120, 200, 300, 150],
            x: [-30, 200, 400, 300, 100, -20, -30],
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
            duration: 20,  // Duración total de la animación
            repeat: Infinity,  // Repetir infinitamente
            repeatType: 'mirror',  // Animación hacia adelante y hacia atrás
            ease: 'easeInOut',  // Tipo de interpolación suave
          }}
        >
          {/* Aquí iría el contenido dentro del div */}
        </motion.div>



        <div className='flex justify-center items-center h-screen '>
          <div className='w-[65vh] h-[88vh] bg-amber-50/60 border-12 rounded-xl border-black/62 z-1 shadow-[#fdfdfe9c] shadow-2xl -mt-10'>
            <h1 className='text-center mt-5 text-[30px] font-bold bg-clip-tex text-[#e9642a] drop-shadow-amber-100 text-shadow-lg text-shadow-[#440a0aa5]' >Hoy está Soleado!</h1>
          </div>
        </div>


      </motion.main >
    </>
  )
}

export default App
