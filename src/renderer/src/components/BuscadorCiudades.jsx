import { useState } from "react";
import useGetCiudades from "./hooks/useGetCiudades";

export default function BuscadorCiudades({ setCiudadesActuales }) {

    const [mostrarLista, setMostrarLista] = useState(false);
    const [ciudadValue, setCiudadValue] = useState(null);
    const getCiudad = useGetCiudades(ciudadValue);


    const agregarCiudad = (ciudad) => {
        setCiudadesActuales(prev => [...prev, ciudad]);
        setCiudadValue("");
    }

    return (
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
                className="block w-full p-3 pl-10 text-sm shadow-sm placeholder-gray-500 text-gray-900 border border-[#9AA9B7] rounded-lg bg-gray-50 focus:ring-blue-400 focus:border-blue-400 transition"
                placeholder="Barcelona..."
                onFocus={() => setMostrarLista(true)}
                onBlur={() => setMostrarLista(false)}
                value={ciudadValue}
                onChange={(e) => setCiudadValue(e.target.value)}
            />
            {/* DropDown */}
            {mostrarLista && ciudadValue && (
                <ul className=" absolute w-full max-h-60 overflow-y-auto scroll-no bg-white border border-[#9AA9B7] rounded-sm transition">
                    {getCiudad?.map((ciudad) => (
                        <div>
                            <li onMouseDown={() => agregarCiudad(ciudad)} className="w-full p-3 text-sm text-gray-900 hover:bg-[#E6F4FF]  cursor-pointer ">
                                <p className="text-lg font-semibold text-gray-800">{ciudad.name}</p>
                                <p className="text-sm text-gray-500">{ciudad.country} - {ciudad.state}</p>
                            </li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}