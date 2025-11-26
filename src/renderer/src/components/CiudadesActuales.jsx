import { useNavigate } from "react-router-dom";
import { useSlideStore } from "./hooks/useSlideStore";

export default function CiudadesActuales({ ciudadesActuales, setCiudadesActuales }) {

    const navigate = useNavigate();
    const { currentSlide, setCurrentSlide } = useSlideStore();

    //Función que guarda el slide actual en una variable global y navega a la página principal
    const handleClick = (indexCiudad) => {
        setCurrentSlide(indexCiudad);
        navigate("/");
    }

    //Función para eliminar una ciudad de la lista de ciudades actuales
    const eliminarCiudad = (ciudad, index) => {
        //Ajustamos el slide actual si es necesario
        if (index < currentSlide || index === currentSlide && currentSlide === ciudadesActuales.length - 1) {
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0);
        }
        
        //Eliminamos la ciudad del estado de ciudades actuales
        setCiudadesActuales(prev => prev.filter(c => c !== ciudad)); // También se puede hacer lo de abajo \ prev (se puede llamar como quiera) = es el anterior estado del ciudadesActuales
        //setCiudadesActuales(ciudadesActuales.filter(c => c !== ciudad));
    };

    //Mensaje si no hay ciudades añadidas
    if (ciudadesActuales?.length === 0) {
        return (
            <p className="text-gray-500 text-center italic h-55 mt-5">
                No has añadido ninguna ciudad todavía.
            </p>
        )
    }

    return (
        < ul className="overflow-y-auto h-screen max-h-60 ">
            {
                ciudadesActuales?.map((ciudad, index) => (
                    <li key={index} onClick={() => handleClick(index)} className={`flex w-full h-20 rounded-md border border-[#707070]/40 shadow-[inset_0_4px_6px_#9fd2e7] bg-[#65C1E9] hover:bg-[#339fce] ${currentSlide == index && "bg-[#339fce]"} transition cursor-pointer justify-between items-center px-5 mt-2`}>
                        <div className="text-center flex flex-col">
                            <h3 className="text-lg text-white">{ciudad.name}</h3>
                            <p className="text-sm text-[#E2E8F0]">{ciudad.state} - {ciudad.country}</p>
                            <p className="text-[#E2E8F0] leading-3">Nublado</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-white text-xl">20ºC</h3>
                            <p className="text-[#E2E8F0]">31ºC / 23ºC</p>
                        </div>
                        <i onClick={(e) => { e.stopPropagation(), eliminarCiudad(ciudad, index) }} className="fa-solid fa-trash text-3xl text-red-600 hover:text-red-800 cursor-pointer duration-150 "></i>
                    </li>
                ))
            }
        </ul>
    );

}