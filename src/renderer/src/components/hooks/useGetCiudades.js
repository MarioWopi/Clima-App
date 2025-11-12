import { useEffect, useState } from "react";


export default function useGetCiudades(ciudad) {

    const [ciudades, setCiudades] = useState();
    const api_key = import.meta.env.VITE_WEATHER_API_KEY

    useEffect(() => {

        async function getCiudades() {

            try {
                if (!ciudad) return;
                const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=5&appid=${api_key}&lang=es`);
                setCiudades(await response.json());
            } catch (error) {
                console.log("Error al obtener la ciudad: " + error.message);
            }
        }

        getCiudades("Barcelona")

    }, [ciudad])

    return ciudades;
}