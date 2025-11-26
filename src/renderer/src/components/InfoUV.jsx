import { useLocation, useNavigate } from "react-router-dom"


export default function InfoUV() {

    const navigate = useNavigate();

    // Obtener los UV desde el estado de la ubicación
    const location = useLocation();
    const { uv } = location.state;

    const matchRange = (uvTabla, uv) => {
        //Convertimos la los UV de la ciudad a número entero
        uv = parseInt(uv);

        //Sanitizamos los datos de la tabla
        if (uvTabla.includes("+")) {
            return uv >= parseInt(uvTabla.replace("+", "").trim());
        }
        if (uvTabla.includes("-")) {
            const [min, max] = uvTabla.split("-").map(v => parseInt(v.trim()));
            return uv >= min && uv <= max;
        }

    }
    //Función para volver a la página anterior
    const atras = () => {
        navigate(-1);
    }
    //Datos de la tabla de UV
    const uvData = [
        {
            "rango": "0-2",
            "riesgo": "Bajo",
            "descripcion_riesgo": "La radiación ultravioleta es mínima y la probabilidad de daño cutáneo u ocular es muy baja.",
            "recomendacion": "Exposición segura; se recomienda el uso de gafas de sol en presencia de reflejos intensos."
        },
        {
            "rango": "3-5",
            "riesgo": "Moderado",
            "descripcion_riesgo": "Existe riesgo de quemadura solar tras una exposición prolongada sin protección.",
            "recomendacion": "Aplicar protector solar (SPF 30+); buscar sombra especialmente alrededor del mediodía."
        },
        {
            "rango": "6-7",
            "riesgo": "Alto",
            "descripcion_riesgo": "El riesgo de daño en piel y ojos aumenta significativamente; la quemadura puede ocurrir en periodos relativamente cortos.",
            "recomendacion": "Evitar la exposición solar directa; utilizar sombrero y protector solar SPF 30+."
        },
        {
            "rango": "8-10",
            "riesgo": "Muy alto",
            "descripcion_riesgo": "La radiación UV puede producir quemaduras rápidas y efectos nocivos acumulativos.",
            "recomendacion": "Evitar la exposición entre las 10:00 y 16:00; usar protector SPF 50+ y ropa protectora."
        },
        {
            "rango": "11+",
            "riesgo": "Extremo",
            "descripcion_riesgo": "La radiación es extremadamente intensa y puede causar daño severo en la piel y los ojos en un tiempo muy reducido.",
            "recomendacion": "Evitar la exposición solar; mantenerse en sombra, usar gafas, sombrero y protector SPF 50+."
        }
    ]
    //Colores para cada fila de la tabla
    const colors = {
        0: "bg-green-500 text-white",
        1: "bg-yellow-400 text-black",
        2: "bg-orange-500 text-white",
        3: "bg-red-600 text-white",
        4: "bg-violet-700 text-white"
    };


    return (
        <div className="flex flex-col items-center w-screen h-screen hide-scrollbar overflow-y-auto pb-10 text-center z-1 bg-linear-to-b from-[rgba(126,206,255)] to-[rgba(255,255,255)] backdrop-blur-sm border border-[#261D1D]/14">

            <div className="relative w-full border border-gray-200 rounded mt-5 font-sans">
                <table className="w-full text-xs sm:text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 sticky top-0 z-1">
                        <tr>
                            <th className="px-2 py-1 border border-gray-300">Nivel UV</th>
                            <th className="px-2 py-1 border border-gray-300">Riesgo</th>
                            <th className="px-2 py-1 border border-gray-300">Descripción</th>
                            <th className="px-2 py-1 border border-gray-300">Recomendación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            uvData.map((data, index) => {

                                const isMatch = matchRange(data.rango, uv);
                                return (
                                    <tr key={index} className={`${colors[index]} ${isMatch ? "bg-opacity-70 animate-pulse hover:animate-none hover:scale-102 transition ease-in-out" : "bg-opacity-100"
                                        } border-gray-300`}>
                                        <td className="px-2 py-1 border border-gray-300 text-center">{data.rango}</td>
                                        <td className="px-2 py-1 border border-gray-300 text-center">{data.riesgo}</td>
                                        <td className="px-2 py-1 border border-gray-300">{data.descripcion_riesgo}</td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            {data.recomendacion}
                                        </td>
                                    </tr>)
                            })
                        }

                    </tbody>
                </table>
            </div>
            <button
                onClick={atras}
                className=" w-90 mb-5 border border-cyan-700/40 mt-6 px-5 py-2 bg-[#34748f] text-white rounded-md hover:bg-[#5795af] cursor-pointer transition duration-200"
            >
                Volver
            </button>
        </div >
    );
}