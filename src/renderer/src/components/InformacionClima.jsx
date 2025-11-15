function InformacionClima({ clima }) {

    return (
        /* Contenedor principal */
        <div className="flex flex-row items-center justify-center mt-5 gap-4 " >

            {/* Información del clima */}
            < div className="flex flex-col" >
                <h2 className="text-[36px] leading-none drop-shadow-md">{Math.round(clima.main.temp)}ºC</h2>
                <h3 className="text-sm leading-none drop-shadow-md">{clima.name}</h3>

                <div className="flex gap-2">
                    <p className="text-sm">{clima.weather[0].main}</p>
                    <p className="text-sm">{Math.round(clima.main.temp_min)}ºC / {Math.round(clima.main.temp_max)}ºC</p>
                </div>
            </div >

            {/* Imagen de Clima */}
            < img className="size-23 drop-shadow-xl " src={'public/sun.png'} alt="_" />
        </div >
    );

}

export default InformacionClima;