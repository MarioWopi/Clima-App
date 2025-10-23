import Versions from './components/Versions'
import './assets/main.css'
import { motion } from 'motion/react'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <motion.main className="dia">
        <motion.div className='sol'
          initial={{ y: 30, x: 0 }}
          animate={{
            y: [30, -20, 30],
            x: [0, 200, 400],
            background: [
              "radial-gradient(#fff9c4, #fff176, #fbc02d)",
              "radial-gradient(#ffcc80, #ffb74d, #ff9800)",
            ],
            boxShadow: [
              "0px 0px 30px 2px #f4e75d",
              "0px 0px 40px 5px #ffb347",
            ]

          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        >
        </motion.div>

        <div className='flex justify-center items-center h-screen '>
          <div className='w-[65vh] h-[90vh] bg-amber-50/60 border-12 rounded-xl border-black/62 z-1 shadow-[#fdfdfe9c] shadow-2xl'>
            <h1 className='text-center mt-5 text-[30px] font-bold bg-clip-tex text-[#e9642a] drop-shadow-amber-100 text-shadow-lg text-shadow-[#440a0aa5]' >Hoy está Soleado!</h1>
          </div>
        </div>


      </motion.main >
    </>
  )
}

export default App
