import { useLocation, useNavigate } from "react-router-dom"


export default function InfoHumedad() {

    const navigate = useNavigate();

    // Obtener la humedad desde el estado de la ubicación
    const location = useLocation();
    const { humedad } = location.state;

    const matchRange = (humedadTabla, humedad) => {
        //Convertimos la humedad de la ciudad a número entero
        humedad = parseInt(humedad);

        //Sanitizamos los datos de la tabla
        if (humedadTabla.includes(">")) {
            return humedad >= parseInt(humedadTabla.replace(/[>%]/g, "").trim());
        }

        if (humedadTabla.includes("-")) {
            const [min, max] = humedadTabla.replace("%", "").split("-").map(v => parseInt(v.trim()));
            return humedad >= min && humedad <= max;
        }

    }
    //Función para volver a la página anterior
    const atras = () => {
        navigate(-1);
    }
    //Datos de la tabla de humedad
    const humedadData = [
        {
            "rango": "0-20%",
            "nivel": "Muy seco",
            "riesgo_sensacion": "Sequedad extrema, piel y garganta resecas.",
            "recomendacion": "Hidrátate y usa humidificador."
        },
        {
            "rango": "21-40%",
            "nivel": "Seco",
            "riesgo_sensacion": "Aire seco, ligera irritación.",
            "recomendacion": "Bebe agua, ventila espacios."
        },
        {
            "rango": "41-60%",
            "nivel": "Ideal",
            "riesgo_sensacion": "Confort térmico y respiratorio óptimo.",
            "recomendacion": "Usa ropa ligera, ventila."
        },
        {
            "rango": "61-75%",
            "nivel": "Húmedo",
            "riesgo_sensacion": "Sensación de humedad y calor moderado.",
            "recomendacion": "Ventila y controla la humedad."
        },
        {
            "rango": "76-90%",
            "nivel": "Muy húmedo",
            "riesgo_sensacion": "Sensación de bochorno y sudoración.",
            "recomendacion": "Usa ventilador o aire acondicionado."
        },
        {
            "rango": ">91%",
            "nivel": "Extremo",
            "riesgo_sensacion": "Sensación sofocante, riesgo de golpe de calor.",
            "recomendacion": "Evita esfuerzos físicos y calor directo."
        }
    ];
    //Colores para cada fila de la tabla
    const colors = {
        0: "bg-red-600 text-white",
        1: "bg-orange-400 text-black",
        2: "bg-yellow-300 text-black",
        3: "bg-green-400 text-black",
        4: "bg-purple-500 text-white",
        5: "bg-gray-800 text-white"
    }


    return (
        <div className="flex flex-col items-center w-screen h-screen hide-scrollbar overflow-y-auto pb-10 text-center z-1 bg-linear-to-b from-[rgba(126,206,255)] to-[rgba(255,255,255)] backdrop-blur-sm border border-[#261D1D]/14">

            <div className="relative w-full border border-gray-200 rounded mt-5 font-sans">
                <table className="w-full text-xs sm:text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 sticky top-0 z-1">
                        <tr>
                            <th className="px-5 py-5 border border-gray-300">%Humedad</th>
                            <th className="px-5 py-5 border border-gray-300">Nivel</th>
                            <th className="px-5 py-5 border border-gray-300">Riesgo</th>
                            <th className="px-5 py-5 border border-gray-300">Recomendación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            humedadData.map((data, index) => {

                                const isMatch = matchRange(data.rango, humedad);
                                return (
                                    <tr key={index} className={`${colors[index]} ${isMatch ? "bg-opacity-70 animate-pulse hover:animate-none hover:scale-102 transition ease-in-out" : "bg-opacity-100"
                                        } border-gray-300`}>
                                        <td className="px-2 py-3 border border-gray-300 text-center">{data.rango}</td>
                                        <td className="px-2 py-3 border border-gray-300 text-center">{data.nivel}</td>
                                        <td className="px-2 py-3 border border-gray-300">{data.riesgo_sensacion}</td>
                                        <td className="px-2 py-3 border border-gray-300">
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