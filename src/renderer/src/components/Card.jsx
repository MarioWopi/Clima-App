import { useEffect, useState } from "react";
import BotonesClima from "./BotonesClima";
import InformacionClima from "./InformacionClima";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

function horaFormateada(date) {
    return date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0") + ":" + date.getSeconds().toString().padStart(2, "0");
}

async function getClima() {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY;
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=${api_key}`);
        const resultado = await response.json();
        return resultado;
    } catch (error) {
        throw new Error(`Algo ha fallado: ${error.message}`)
    }


}



function Card() {
    // o también se puede hacer así now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // El padStart hace que el dato que te haya dado siempre tenga 2 caracteres como minimo y si hay menos de 2 añade 0s empezando por el principio
    const [hora, setHora] = useState(horaFormateada(new Date()));
    const [clima, setClima] = useState(null);

    useEffect(() => {

        async function cargarClima() {
            const datosClima = await getClima();
            setClima(datosClima);
            console.log(datosClima);
        }
        cargarClima();

    }, []);


    useEffect(() => {

        const intervalo = setInterval(() => {
            setHora(horaFormateada(new Date()));
        }, 1000);

        return () => clearInterval(intervalo);

    }, []);


    return (
        <>
            <div className='flex flex-col items-center w-screen h-screen text-center pt-10 z-1 '>

                {clima ? (
                    <>
                        <div className="flex mr-10 justify-end w-full">
                            <div className="size-10 rounded-4xl bg-[#2929294d] flex items-center justify-center -mt-5 transition duration-300 hover:bg-[#2929297e] hover:scale-110 hover:cursor-pointer">
                                <div id="cruz" />
                            </div>
                        </div>

                        <div className="overflow-hidden items-center w-[300px] h-fit bg-linear-to-b from-[rgba(126,206,255,0.61)] to-[rgba(255,255,255,0.52)] rounded-xl backdrop-blur-sm border border-[#261D1D]/14 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#292928] py-5 px-4 flex flex-col">
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

                            <Splide
                                options={{
                                    arrows: false,
                                    pagination: false,
                                }}
                            >
                                <SplideSlide>

                                    {/*  */}
                                    <InformacionClima clima={clima}></InformacionClima>

                                    {/* Botones con tiempo atmosférico */}
                                    <div className="mt-4 grid grid-cols-2 justify-center gap-2" >
                                        <BotonesClima texto={`${clima.wind.speed} m/s`} icono="wind"></BotonesClima>
                                        <BotonesClima texto={`${clima.wind.speed} arreglar api`} icono="uv"></BotonesClima>
                                        <BotonesClima texto={`${clima.main.humidity}%`} icono="humidity"></BotonesClima>
                                        <BotonesClima texto={`${Math.round(clima.main.feels_like)}ºC`} icono="temperatura"></BotonesClima>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>

                                </SplideSlide>
                            </Splide>

                        </div>



                        {/* <div className="bg-amber-50/30 rounded-xl backdrop-blur-sm border border-amber-50/20 shadow-[#fdfdfe9c] shadow-2xl text-white py-5">
                Card Secundaria pronostico 5 dias
                Humedad, velocidad
            </div> */}

                    </>


                ) : (
                    <div className="flex items-center justify-center w-[300px] h-[200px] bg-linear-to-b from-[rgba(126,206,255,0.61)] to-[rgba(255,255,255,0.52)] rounded-xl backdrop-blur-sm border border-[#261D1D]/14 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#292928]">
                        <p className="text-lg font-semibold animate-pulse">Cargando la página...</p>
                    </div>
                )}
            </div >
        </>
    )

}

export default Card;