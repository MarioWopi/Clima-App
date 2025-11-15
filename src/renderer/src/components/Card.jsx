import { useEffect, useMemo, useState } from "react";
import BotonesClima from "./BotonesClima";
import InformacionClima from "./InformacionClima";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useNavigate } from "react-router-dom";
import useHora from "./hooks/useHora";
import useClima from "./hooks/useClima";

function Card({ ciudadesActuales }) {

    const navigate = useNavigate();
    const hora = useHora();
    const datosClima = useClima(ciudadesActuales);
    const ciudadesValidas = datosClima.filter(c => !c.error)
    const ciudadesNoValidas = datosClima.filter(c => c.error)
    console.log("Array Ciudades ->" + JSON.stringify(datosClima)) //Arreglar porque se me ejecuta infinitamente
    const totalPagination = Math.min(ciudadesValidas.length, 3)


    const anadirCiudad = () => {
        navigate("anadirCiudad");
    }

    //Muestra una card de error, si la api de weather da algun tipo de error
    if (ciudadesNoValidas.length > 0) {
        return (
            <div className='flex flex-col items-center w-screen h-screen text-center pt-10'>
                <div className="flex mr-10 justify-end w-full">
                    <div onClick={anadirCiudad} className="size-10 rounded-4xl bg-[#2929294d] flex items-center justify-center -mt-5 transition duration-300 hover:bg-[#2929297e] hover:scale-110 hover:cursor-pointer">
                        <div id="cruz" />
                    </div>
                </div>
                <div className="bg-red-200 border border-red-500 text-red-700 p-3 rounded mb-4 w-[300px] z-1">
                    <p className="font-semibold">Algunas ciudades no pudieron cargarse:</p>
                    <ul>
                        {ciudadesNoValidas.map(c => (
                            <li key={c.nombre}>❌ {c.nombre}: {c.error}</li>
                        ))}
                    </ul>
                </div></div >)
    }


    //Muestra una card al esperar los datos de la api
    if (!datosClima) {
        return (
            <div className='flex flex-col items-center w-screen h-screen text-center pt-10 z-1'>
                <div className="card w-[300px] h-[200px] flex items-center justify-center">
                    <p className="text-lg font-semibold animate-pulse">Cargando la página...</p>
                </div>
            </div >
        );
    }

    //Muestra una card con los datos de la API
    return (
        <>
            <div className='flex flex-col items-center w-screen h-screen text-center pt-10 z-1 '>
                <div className="flex mr-10 justify-end w-full">
                    <div onClick={anadirCiudad} className="size-10 rounded-4xl bg-[#2929294d] flex items-center justify-center -mt-5 transition duration-300 hover:bg-[#2929297e] hover:scale-110 hover:cursor-pointer">
                        <div id="cruz" />
                    </div>
                </div>

                <div className="card overflow-hidden items-center w-[300px] max-h-85 h-screen  py-5 px-4 flex flex-col">
                    { /* Hora  */}
                    <div className="-mt-3 flex justify-center w-30 py-1 text-[#242425] bg-[#fcfcfcaf] drop-shadow-[1px_2px_1px_rgba(0,0,0,0.25)] border-3 border-black/50 rounded-2xl ">
                        <p className="font-semibold text-[rgb(78,78,78)]">{hora}</p>
                    </div>


                    {ciudadesValidas.length > 0 ? (
                        <>
                            {/* Carrusel para los diferentes paises agregados  */}
                            < Splide
                                className="w-full"
                                options={{
                                    arrows: false,
                                    pagination: false,
                                }}
                            >

                                {
                                    ciudadesValidas.map((c) => (
                                        <SplideSlide>
                                            <InformacionClima clima={c.estadoAtmosferico}></InformacionClima>

                                            {/* Botones con tiempo atmosférico */}
                                            <div className="mt-4 grid grid-cols-2 justify-center gap-2" >
                                                <BotonesClima texto={`${c.estadoAtmosferico.wind.speed} m/s`} icono="wind"></BotonesClima>
                                                <BotonesClima texto={`${c.estadoAtmosferico.wind.speed} error`} icono="uv"></BotonesClima>
                                                <BotonesClima texto={`${c.estadoAtmosferico.main.humidity}%`} icono="humidity"></BotonesClima>
                                                <BotonesClima texto={`${Math.round(c.estadoAtmosferico.main.feels_like)}ºC`} icono="temperatura"></BotonesClima>
                                            </div>
                                        </SplideSlide>
                                    ))
                                }

                            </Splide>
                            { /* Puntos para añadir nuevos paises  */}

                            <div className="flex mt-5 gap-2 text-white w-full justify-center">
                                {
                                    Array.from({ length: totalPagination }).map(() => (
                                        <div className="bg-gray-500 w-4 h-4 rounded-3xl border border-gray-600 hover:bg-white transition cursor-pointer" />
                                    ))
                                }

                            </div>
                        </>
                    ) : (
                        <div className="flex h-screen justify-center items-center">
                            <p className="text-lg text-gray-500 italic">Actualmente no hay ciudades...</p>
                        </div>
                    )}


                </div>

                {/* <div className="bg-amber-50/30 rounded-xl backdrop-blur-sm border border-amber-50/20 shadow-[#fdfdfe9c] shadow-2xl text-white py-5">
                Card Secundaria pronostico 5 dias
                Humedad, velocidad
            </div> */}
            </div >
        </>
    )

}

export default Card;