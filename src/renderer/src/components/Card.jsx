import { useEffect, useState } from "react";
import BotonesClima from "./BotonesClima";
import InformacionClima from "./InformacionClima";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useNavigate } from "react-router-dom";
import useHora from "./hooks/useHora";
import useClima from "./hooks/useClima";

function Card() {

    const navigate = useNavigate();
    const hora = useHora();
    const { clima, error: errorClima } = useClima("Barcelona");

    const anadirCiudad = () => {
        navigate("anadirCiudad");
    }

    //Muestra una card de error, si la api de weather da algun tipo de error
    if (errorClima) {
        return (
            <div className='flex flex-col items-center w-screen h-screen text-center pt-10 z-1 '>
                <div className="card w-[300px] h-[200px] flex items-center justify-center">
                    <p className="text-red-600 font-semibold">Error al cargar: {errorClima}</p>
                </div>
            </div >
        )
    }

    //Muestra una card al esperar los datos de la api
    if (!clima) {
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

                <div className="card overflow-hidden items-center w-[300px] h-fit py-5 px-4 flex flex-col">
                    { /* Hora  */}
                    <div className="-mt-3 flex justify-center w-30 py-1 text-[#242425] bg-[#fcfcfcaf] drop-shadow-[1px_2px_1px_rgba(0,0,0,0.25)] border-3 border-black/50 rounded-2xl ">
                        <p className="font-semibold text-[rgb(78,78,78)]">{hora}</p>
                    </div>

                    { /* Puntos para añadir nuevos paises  */}

                    <div className="absolute right-5 flex justify-end gap-2 text-white ">
                        <div className="bg-white w-3 h-3 rounded-3xl border border-gray-300"></div>
                        <div className="bg-white w-3 h-3 rounded-3xl border border-gray-300"></div>
                        <div className="bg-white w-3 h-3 rounded-3xl border border-gray-300"></div>
                    </div>

                    { /* Carrusel para los diferentes paises agregados  */}
                    <Splide
                        options={{
                            arrows: false,
                            pagination: false,
                        }}
                    >
                        <SplideSlide>
                            <InformacionClima clima={clima}></InformacionClima>

                            {/* Botones con tiempo atmosférico */}
                            <div className="mt-4 grid grid-cols-2 justify-center gap-2" >
                                <BotonesClima texto={`${clima.wind.speed} m/s`} icono="wind"></BotonesClima>
                                <BotonesClima texto={`${clima.wind.speed} error`} icono="uv"></BotonesClima>
                                <BotonesClima texto={`${clima.main.humidity}%`} icono="humidity"></BotonesClima>
                                <BotonesClima texto={`${Math.round(clima.main.feels_like)}ºC`} icono="temperatura"></BotonesClima>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <InformacionClima clima={clima}></InformacionClima>

                        </SplideSlide>
                    </Splide>

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