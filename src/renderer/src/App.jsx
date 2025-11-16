import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/main.css'
import PantallaPrincipal from './components/PantallaPrincipal'
import AnadirCiudad from './components/AnadirCiudad'
import { useState } from 'react'
import InfoViento from './components/infoViento'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  const cerrarVentana = () => { window.electron.ipcRenderer.send('accion', 'cerrar-ventana') }
  const minimizarVentana = () => { window.electron.ipcRenderer.send('accion', 'minimizar-ventana') }

  const [ciudadesActuales, setCiudadesActuales] = useState([]);

  return (
    <>
      <div className='w-full bg-linear-to-b from-[#4685B2] to-[#467596] flex relative z-9999 items-center gap-3 on-drag select-none border-b border-black '>
        <li className='p-2 text-[#ffffff] font-semibold text-lg grow list-none  '>CLIMA APP</li>
        <li onClick={minimizarVentana} className='text-gray-200 px-3 p-1 rounded list-none hover:text-gray-500 hover:cursor-pointer no-drag font-extrabold'>-</li>
        <li onClick={cerrarVentana} className='text-gray-200 px-3 p-1 rounded list-none mr-3 hover:cursor-pointer hover:text-red-500 no-drag font-bold'>X</li>
      </div>
      <BrowserRouter>
        <Routes>
          <Route index element={<PantallaPrincipal ciudadesActuales={ciudadesActuales} setCiudadesActuales={setCiudadesActuales} />} />

          <Route path='anadirCiudad' element={<AnadirCiudad ciudadesActuales={ciudadesActuales} setCiudadesActuales={setCiudadesActuales} />} />
          <Route path='infoViento' element={<InfoViento ciudadesActuales={ciudadesActuales} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
