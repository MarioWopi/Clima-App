import { useEffect, useRef, useState } from "react";

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

function arraysIguales(a, b) {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i].name !== b[i].name || a[i].country !== b[i].country) return false;
    }
    return true;
}

export default function useClima(arrayCiudades) {
    const [estadoGeoAtmosferico, setEstadoGeoAtmosferico] = useState([]);
    const prevCiudadesRef = useRef([]);

    useEffect(() => {
        if (
            !arrayCiudades ||
            arrayCiudades.length === 0 ||
            arraysIguales(prevCiudadesRef.current, arrayCiudades)
        ) return;

        prevCiudadesRef.current = arrayCiudades;

        async function cargarClimas() {
            const resultados = await Promise.all(arrayCiudades.map((ciudad) => fetchClima(ciudad)));
            setEstadoGeoAtmosferico(resultados);
        }

        cargarClimas();
    }, [arrayCiudades]);

    return estadoGeoAtmosferico;
}