import { useNavigate } from "react-router-dom";

import { useState } from "react";
import CiudadesActuales from "./CiudadesActuales";
import BuscadorCiudades from "./BuscadorCiudades";
import useClima from "./hooks/useClima";

function AnadirCiudad({ciudadesActuales, setCiudadesActuales}) {
    const navigate = useNavigate();
    const getClima = useClima(ciudadesActuales);

    console.log(ciudadesActuales);


    return (
        <div className="bg-[linear-gradient(to_top,#9AA9B7_12%,#98B7CF_100%)] w-screen h-screen flex flex-col p-5 shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]">
            <h1 className="text-gray-700 font-bold text-3xl text-center mb-5">
                GESTIONAR CIUDADES
            </h1>

            {/* Barra de busquedas para añadir ciudades */}
            <BuscadorCiudades
                setCiudadesActuales={setCiudadesActuales}
            />

            {/* Lista de ciudades añadidas */}
            <h2 className="text-white text-2xl  mt-4 border-b border-gray-300 pb-2 tece">
                Ubicaciones actuales
            </h2>
            <CiudadesActuales ciudadesActuales={ciudadesActuales} setCiudadesActuales={setCiudadesActuales} />

            {/* Botón volver */}
            <button
                onClick={() => navigate("/")}
                className=" w-full border border-cyan-700/40 mt-6 px-5 py-2 bg-[#34748f] text-white rounded-md hover:bg-[#5795af] transition duration-200"
            >
                Volver
            </button>
        </div >
    );
}

export default AnadirCiudad;
