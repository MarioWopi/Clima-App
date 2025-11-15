import { useEffect, useState } from "react";


async function fetchClima(provincia = "") {


    const api_key = import.meta.env.VITE_WEATHER_API_KEY;
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${provincia.name},${provincia.country}&units=metric&appid=${api_key}`);
        const clima = await response.json();

        if (!response.ok) {
            throw new Error(`Error de api: ${response.status}`);
        }

        return {
            nombre: provincia.name,
            pais: provincia.country,
            estadoAtmosferico: clima
        }
    } catch (err) {
        return {
            nombre: provincia.name,
            pais: provincia.country,
            error: err.message
        }
    }

}

export default function useClima(arrayCiudades) {

    const [estadoGeoAtmosferico, setEstadoGeoAtmosferico] = useState([]);

    useEffect(() => {

        if (!arrayCiudades || arrayCiudades?.length === 0) return;

        async function cargarClimas() {
            const resultados = await Promise.all(arrayCiudades?.map((ciudad) => fetchClima(ciudad)));
            setEstadoGeoAtmosferico(resultados)
        }

        cargarClimas();
    }, [arrayCiudades]);


    return estadoGeoAtmosferico;

}

