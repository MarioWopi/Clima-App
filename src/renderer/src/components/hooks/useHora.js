import { useEffect, useState } from "react";


function horaFormateada(date) {
    // o también se puede hacer así now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // El padStart hace que el dato que te haya dado siempre tenga 2 caracteres como minimo y si hay menos de 2 añade 0s empezando por el principio

    return date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0") + ":" + date.getSeconds().toString().padStart(2, "0");
}


export default function useHora() {

    const [hora, setHora] = useState(horaFormateada(new Date()));

    useEffect(() => {

        const intervalo = setInterval(() => {
            setHora(horaFormateada(new Date()));
        }, 1000);

        return () => clearInterval(intervalo);

    }, []);

    return hora;
}