import { useLocation, useNavigate } from "react-router-dom"


export default function InfoViento() {

    const navigate = useNavigate();

    // Obtener la velocidad del viento desde el estado de la ubicación
    const location = useLocation();
    const { velocidadViento } = location.state;

    const matchRange = (vVientoTabla, vVientoCiudad) => {
        //Convertimos la velocidad del viento de la ciudad a número entero
        vVientoCiudad = parseInt(vVientoCiudad);

        //Sanitizamos los datos de la tabla
        if (vVientoTabla.includes("<")) {
            return vVientoCiudad < parseInt(vVientoTabla.replace("<", "").trim());
        }
        if (vVientoTabla.includes("-")) {
            const [min, max] = vVientoTabla.split("-").map(v => parseInt(v.trim()));
            return vVientoCiudad >= min && vVientoCiudad <= max;
        }

    }
    //Función para volver a la página anterior
    const atras = () => {
        navigate(-1);
    }
    //Datos de la tabla de viento según la escala de Beaufort
    const vientoData = [
        {
            "numero_beaufort": 0,
            "velocidad_kmh": "< 1",
            "descripcion": "Calma",
            "efectos_tierra": "Calma. El humo sube verticalmente."
        },
        {
            "numero_beaufort": 1,
            "velocidad_kmh": "1 - 5",
            "descripcion": "Aire Ligero",
            "efectos_tierra": "Movimiento del viento visible en humo."
        },
        {
            "numero_beaufort": 2,
            "velocidad_kmh": "6 - 11",
            "descripcion": "Brisa Ligera",
            "efectos_tierra": "Viento sentido en piel expuesta. Las hojas crujen."
        },
        {
            "numero_beaufort": 3,
            "velocidad_kmh": "12 - 19",
            "descripcion": "Brisa Gentil",
            "efectos_tierra": "Hojas y ramitas más pequeñas en movimiento constante."
        },
        {
            "numero_beaufort": 4,
            "velocidad_kmh": "20 - 28",
            "descripcion": "Brisa Moderada",
            "efectos_tierra": "Polvo y hojas de papel se levantan. Ramas pequeñas empiezan a moverse."
        },
        {
            "numero_beaufort": 5,
            "velocidad_kmh": "29 - 38",
            "descripcion": "Brisa Firme",
            "efectos_tierra": "Ramas pequeñas comienzan a oscilar."
        },
        {
            "numero_beaufort": 6,
            "velocidad_kmh": "39 - 49",
            "descripcion": "Brisa Fuerte",
            "efectos_tierra": "Grandes ramas están en movimiento. Silbidos en el viento. Difícil usar paraguas."
        },
        {
            "numero_beaufort": 7,
            "velocidad_kmh": "50 - 61",
            "descripcion": "Cerca de un Vendabal",
            "efectos_tierra": "Árboles en movimiento. Alguna dificultad caminando."
        },
        {
            "numero_beaufort": 8,
            "velocidad_kmh": "62 - 74",
            "descripcion": "Vendaval",
            "efectos_tierra": "Ramitas y ramas pequeñas se rompen. Autos moviéndose con dificultad."
        },
        {
            "numero_beaufort": 9,
            "velocidad_kmh": "75 - 88",
            "descripcion": "Vendaval fuerte",
            "efectos_tierra": "Ramas grandes se rompen. Daños estructurales leves."
        },
        {
            "numero_beaufort": 10,
            "velocidad_kmh": "89 - 102",
            "descripcion": "Tormenta",
            "efectos_tierra": "Arboles rotos y derribados. Daños estructurales considerables."
        },
        {
            "numero_beaufort": 11,
            "velocidad_kmh": "103 - 117",
            "descripcion": "Tormenta Violenta",
            "efectos_tierra": "Daños generalizados a estructuras y vegetación."
        },
    ];
    //Colores para cada fila de la tabla
    const colors = {
        0: "bg-cyan-100",
        1: "bg-sky-200",
        2: "bg-sky-300",
        3: "bg-lime-200",
        4: "bg-lime-300",
        5: "bg-yellow-200",
        6: "bg-yellow-300",
        7: "bg-amber-200",
        8: "bg-amber-300",
        9: "bg-orange-300",
        10: "bg-red-400 text-white",
        11: "bg-red-500 text-white",
        12: "bg-red-600 text-white",
    };


    return (
        <div className="flex flex-col items-center w-screen h-screen hide-scrollbar overflow-y-auto pb-10 text-center z-1 bg-linear-to-b from-[rgba(126,206,255)] to-[rgba(255,255,255)] backdrop-blur-sm border border-[#261D1D]/14">

            <div className="relative w-full border border-gray-200 rounded mt-5 font-sans">
                <table className="w-full text-xs sm:text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 sticky top-0 z-1 ">
                        <tr>
                            <th className="px-2 py-1 border border-gray-300">Número Beaufort</th>
                            <th className="px-2 py-1 border border-gray-300">Velocidad del Viento (km/h)</th>
                            <th className="px-2 py-1 border border-gray-300">Descripción</th>
                            <th className="px-2 py-1 border border-gray-300">Efectos del Viento en Tierra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vientoData.map((data, index) => {

                                const isMatch = matchRange(data.velocidad_kmh, velocidadViento);
                                return (
                                    <tr key={index} className={`${colors[index]} ${isMatch && 'animate-bounce hover:animate-none hover:scale-105 transition ease-in-out'}  border-gray-300`}>
                                        <td className="px-2 py-1 border border-gray-300 text-center">{data.numero_beaufort}</td>
                                        <td className="px-2 py-1 border border-gray-300 text-center">{data.velocidad_kmh}</td>
                                        <td className="px-2 py-1 border border-gray-300">{data.descripcion}</td>
                                        <td className="px-2 py-1 border border-gray-300">
                                            {data.efectos_tierra}
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