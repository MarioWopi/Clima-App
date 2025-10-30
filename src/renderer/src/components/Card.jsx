import { motion } from "motion/react"
import { useEffect, useState } from "react";

function Card() {
    // o también se puede hacer así now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // El padStart hace que el dato que te haya dado siempre tenga 2 caracteres como minimo y si hay menos de 2 añade 0s empezando por el principio
    const [hora, setHora] = useState(new Date().getHours().toString().padStart(2, "0") + ":" + new Date().getMinutes().toString().padStart(2, "0"));

    useEffect(() => {

        const intervalo = setInterval(() => {
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, "0");
            const minutes = date.getMinutes().toString().padStart(2, "0");
            const sec = date.getSeconds().toString().padStart(2, "0");
            setHora(hours + ":" + minutes + ":" + sec);
        }, 1000);


        return () => clearInterval(intervalo);

    }, []);


    return (
        <div className='flex flex-col items-center w-screen h-screen text-center pt-10 z-1 '>

            {/* <h1 className='text-center mt-5 text-[30px] font-bold bg-clip-tex text-[#e9642a] drop-shadow-amber-100 text-shadow-lg text-shadow-[#440a0aa5]' >Hoy está Soleado!</h1> */}
            {/* h-full w-full*/}
            <div className=" w-[300px] h-[230px] bg-linear-to-b from-[rgba(126,206,255,0.61)] to-[rgba(255,255,255,0.52)] rounded-xl backdrop-blur-sm border border-[#261D1D]/14 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#292928] py-5 px-4 flex flex-col">

                { /* Hora  */}
                <div className="flex justify-center w-full text-[#242425]">
                    {hora}
                </div>

                { /* Puntos para añadir nuevos paises  */}
                <div className="absolute right-5 flex justify-end gap-2 text-white">
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                </div>

                {/* Contenedor principal */}
                <div className="flex flex-row items-center justify-center mt-2 gap-4">

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
                    <div className="size-23 bg-white/20 rounded flex items-center justify-center">
                        Imagen
                    </div>

                </div>

                {/* Botones */}
                <div className="mt-4 flex justify-center gap-2">
                    <button className="bg-white/20 px-3 py-1 rounded">Viento</button>
                    <button className="bg-white/20 px-3 py-1 rounded">UV</button>
                    <button className="bg-white/20 px-3 py-1 rounded">Humedad</button>
                </div>
            </div>



            {/* <div className="bg-amber-50/30 rounded-xl backdrop-blur-sm border border-amber-50/20 shadow-[#fdfdfe9c] shadow-2xl text-white py-5">
                Card Secundaria pronostico 5 dias
                Humedad, velocidad
            </div> */}

        </div>
    )

}

export default Card;