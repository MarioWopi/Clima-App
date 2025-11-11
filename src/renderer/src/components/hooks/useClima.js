import { useEffect, useState } from "react";

export default function useClima(ciudad = "Barcelona") {

    const [clima, setClima] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getClima() {
            const api_key = import.meta.env.VITE_WEATHER_API_KEY;
            try {
                let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${api_key}`);
                setClima(await response.json());
            } catch (err) {
                setError(err.message)
            }
        }

        getClima();
    }, [ciudad]);


    return { clima, error };

}

