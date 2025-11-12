import { useNavigate } from "react-router-dom";
import useGetCiudades from "./hooks/useGetCiudades";
import { useEffect, useState } from "react";

function AnadirCiudad() {
    const navigate = useNavigate();
    const volver = () => navigate("/");
    const [ciudadValue, setCiudadValue] = useState(null);
    const [mostrarLista, setMostrarLista] = useState(false);
    const [ciudadesActuales, setCiudadesActuales] = useState([]);

    const getCiudad = useGetCiudades(ciudadValue);
    console.log("ciudadactual-> " + ciudadesActuales);



    return (
        <div className="bg-[linear-gradient(to_top,#9AA9B7_12%,#98B7CF_100%)] w-screen h-screen flex flex-col p-5 shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]">
            <h1 className="text-white text-3xl">GESTIONAR CIUDADES</h1>

            {/* Campo de búsqueda */}

            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#9AA9B7] rounded-lg bg-gray-50 focus:ring-[#65C1E9] focus:border-[#65C1E9]"
                    placeholder="Barcelona..."
                    onFocus={() => setMostrarLista(true)}
                    onBlur={() => setMostrarLista(false)}
                    value={ciudadValue}
                    onChange={(e) => setCiudadValue(e.target.value)}
                />
                {/* DropDown */}
                {mostrarLista && ciudadValue && (
                    <ul className="absolute w-full max-h-60 overflow-y-auto scroll-no">
                        {getCiudad?.map((ciudad) => (
                            <div>
                                <li onMouseDown={() => setCiudadesActuales(prev => [...prev, ciudad])} className="w-full p-3 text-sm text-gray-900 border border-[#9AA9B7] rounded-lg bg-gray-50/90 hover:bg-gray-50 cursor-pointer ">
                                    <p>{ciudad.name}</p>
                                    <p>{ciudad.country} - {ciudad.state}</p>
                                </li>

                            </div>
                        ))}
                    </ul>
                )}

            </div>


            {/* Lista de ubicaciones */}
            <h2 className="text-white text-2xl underline underline-offset-4 mt-4">
                Ubicaciones actuales
            </h2>

                    //HACER UNA LISTA
            {
                ciudadesActuales?.map((ciudad) => (
                    <div className="flex w-full h-20 rounded-md border shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)] bg-[#65C1E9] justify-between items-center px-5 mt-2">
                        <div className="text-center">
                            <h3 className="text-lg text-white">{ciudad.name}</h3>
                            <p className="text-[#E2E8F0]">Nublado</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-white text-xl">20ºC</h3>
                            <p className="text-[#E2E8F0]">31ºC / 23ºC</p>
                        </div>
                        <i className="fa-solid fa-trash text-3xl hover:text-[#E53E3E] cursor-pointer duration-150"></i>
                    </div>
                ))
            }


            {/* Botón volver */}
            <button
                onClick={volver}
                className="mt-6 px-4 py-2 bg-[#65C1E9] text-white rounded-md hover:bg-[#4da8cc] transition duration-200"
            >
                Volver
            </button>
        </div>
    );
}

export default AnadirCiudad;
