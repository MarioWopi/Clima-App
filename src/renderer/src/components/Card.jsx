import { useEffect, useState } from "react";
import BotonesClima from "./BotonesClima";


function horaFormateada(date) {
    return date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0") + ":" + date.getSeconds().toString().padStart(2, "0");
}

async function getClima() {
    let response = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=41.39271&lon=2.158541&appid=6a32ea80a301c8d5fee171648f434f2e")
    if (!response.ok) {
        throw new Error(`Algo ha fallado: ${response.status}`);
    }
    const resultado = await response.json();
    console.log(resultado)
    console.log("hola");
}



function Card() {
    // o también se puede hacer así now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // El padStart hace que el dato que te haya dado siempre tenga 2 caracteres como minimo y si hay menos de 2 añade 0s empezando por el principio
    const [hora, setHora] = useState(horaFormateada(new Date()));

    useEffect(() => {

        const intervalo = setInterval(() => {
            setHora(horaFormateada(new Date()));
        }, 1000);


        return () => clearInterval(intervalo);

    }, []);


    return (
        <div className='flex flex-col items-center w-screen h-screen text-center pt-10 z-1 '>

            <div className="flex mr-10 justify-end w-full">
                <div onClick={getClima} className="size-10 rounded-4xl bg-[#2929294d] flex items-center justify-center -mt-5 transition duration-300 hover:bg-[#2929297e] hover:scale-110 hover:cursor-pointer">
                    <div id="cruz" />
                </div>
            </div>


            {/* <h1 className='text-center mt-5 text-[30px] font-bold bg-clip-tex text-[#e9642a] drop-shadow-amber-100 text-shadow-lg text-shadow-[#440a0aa5]' >Hoy está Soleado!</h1> */}
            {/* h-full w-full*/}
            <div className="items-center w-[300px] h-fit bg-linear-to-b from-[rgba(126,206,255,0.61)] to-[rgba(255,255,255,0.52)] rounded-xl backdrop-blur-sm border border-[#261D1D]/14 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#292928] py-5 px-4 flex flex-col">

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

                {/* Contenedor principal */}
                <div className="flex flex-row items-center justify-center mt-5 gap-4 ">

                    {/* Información del clima */}
                    <div className="flex flex-col">
                        <h2 className="text-[36px] leading-none drop-shadow-md">20ºC</h2>
                        <h3 className="text-sm leading-none drop-shadow-md">Barcelona</h3>

                        <div className="flex gap-2">
                            <p className="text-sm">Nublado</p>
                            <p className="text-sm">17º / 23º</p>
                        </div>
                    </div>

                    {/* Imagen de Clima */}

                    <img className="size-23 drop-shadow-xl " src={'public/sun.png'} alt="_" />


                </div>

                {/* Botones */}
                <div className="mt-4 grid grid-cols-2 justify-center gap-2" >
                    <BotonesClima texto="Viento" icono="wind"></BotonesClima>
                    <BotonesClima texto="UV" icono="uv"></BotonesClima>
                    <BotonesClima texto="Humedad" icono="humidity"></BotonesClima>
                    <BotonesClima texto="Sensación térmica" icono="temperatura"></BotonesClima>
                </div>
            </div>



            {/* <div className="bg-amber-50/30 rounded-xl backdrop-blur-sm border border-amber-50/20 shadow-[#fdfdfe9c] shadow-2xl text-white py-5">
                Card Secundaria pronostico 5 dias
                Humedad, velocidad
            </div> */}

        </div >
    )

}

export default Card;