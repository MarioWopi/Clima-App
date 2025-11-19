import { useNavigate } from "react-router-dom"


export default function InfoViento({ ciudadesActuales }) {

    const navigate = useNavigate();

    const atras = () => {
        navigate(-1);
    }

    return (
        <div className="flex flex-col items-center w-screen h-screen hide-scrollbar overflow-y-auto pb-10 text-center z-1 bg-linear-to-b from-[rgba(126,206,255)] to-[rgba(255,255,255)] backdrop-blur-sm border border-[#261D1D]/14">

            <div className="relative w-full border border-gray-200 rounded mt-5 font-sans">
                <table className="w-full text-xs sm:text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 sticky top-0 ">
                        <tr>
                            <th className="px-2 py-1 border border-gray-300">Número Beaufort</th>
                            <th className="px-2 py-1 border border-gray-300">Velocidad del Viento (km/h)</th>
                            <th className="px-2 py-1 border border-gray-300">Descripción</th>
                            <th className="px-2 py-1 border border-gray-300">Efectos del Viento en Tierra</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-cyan-100 border border-gray-300  ">
                            <td className="px-2 py-1 border border-gray-300 text-center">0</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">{'< 1'}</td>
                            <td className="px-2 py-1 border border-gray-300">Calma</td>
                            <td className="px-2 py-1 border border-gray-300">Calma. El humo sube verticalmente.</td>
                        </tr>
                        <tr className="bg-sky-200 border border-gray-300">
                            <td className="px-2 py-1 border border-gray-300 text-center">1</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">1 - 5</td>
                            <td className="px-2 py-1 border border-gray-300">Aire Ligero</td>
                            <td className="px-2 py-1 border border-gray-300">Movimiento del viento visible en humo.</td>
                        </tr>
                        <tr className="bg-sky-300 border border-gray-300 ">
                            <td className="px-2 py-1 border border-gray-300 text-center">2</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">6 - 11</td>
                            <td className="px-2 py-1 border border-gray-300">Brisa Ligera</td>
                            <td className="px-2 py-1 border border-gray-300">Viento sentido en piel expuesta. Las hojas crujen.</td>
                        </tr>
                        <tr className="bg-lime-200 border border-gray-300">
                            <td className="px-2 py-1 border border-gray-300 text-center">3</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">12 - 19</td>
                            <td className="px-2 py-1 border border-gray-300">Brisa Gentil</td>
                            <td className="px-2 py-1 border border-gray-300">
                                Hojas y ramitas más pequeñas en movimiento constante.
                            </td>
                        </tr>
                        <tr className="bg-lime-300 border border-gray-300">
                            <td className="px-2 py-1 border border-gray-300 text-center">4</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">20 - 28</td>
                            <td className="px-2 py-1 border border-gray-300">Brisa Moderada</td>
                            <td className="px-2 py-1 border border-gray-300">
                                Polvo y hojas de papel se levantan. Ramas pequeñas empiezan a moverse.
                            </td>
                        </tr>
                        <tr className="bg-yellow-200 border border-gray-300 ">
                            <td className="px-2 py-1 border border-gray-300 text-center">5</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">29 - 38</td>
                            <td className="px-2 py-1 border border-gray-300">Brisa Firme</td>
                            <td className="px-2 py-1 border border-gray-300">Ramas pequeñas comienzan a oscilar.</td>
                        </tr>
                        <tr className="bg-yellow-300 border border-gray-300">
                            <td className="px-2 py-1 border border-gray-300 text-center">6</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">39 - 49</td>
                            <td className="px-2 py-1 border border-gray-300">Brisa Fuerte</td>
                            <td className="px-2 py-1 border border-gray-300">
                                Grandes ramas están en movimiento. Silbidos en el viento. Difícil usar paraguas.
                            </td>
                        </tr>
                        <tr  className="bg-amber-200 border border-gray-300 animate-bounce ">
                            <td className="px-2 py-1 border border-gray-300 text-center">7</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">50 - 61</td>
                            <td className="px-2 py-1 border border-gray-300">Cerca de un Vendabal</td>
                            <td className="px-2 py-1 border border-gray-300">
                                Árboles en movimiento. Alguna dificultad caminando.
                            </td>
                        </tr>
                        <tr className="bg-amber-300 border border-gray-300">
                            <td className="px-2 py-1 border border-gray-300 text-center">8</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">62 - 74</td>
                            <td className="px-2 py-1 border border-gray-300">Vendaval</td>
                            <td className="px-2 py-1 border border-gray-300">
                                Ramitas y ramas pequeñas se rompen. Autos moviéndose con dificultad.
                            </td>
                        </tr>
                        <tr className="bg-orange-300 border border-gray-300">
                            <td className="px-2 py-1 border border-gray-300 text-center">9</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">75 - 88</td>
                            <td className="px-2 py-1 border border-gray-300">Vendaval fuerte</td>
                            <td className="px-2 py-1 border border-gray-300">
                                Ramas grandes se rompen. Daños estructurales leves.
                            </td>
                        </tr>
                        <tr className="bg-red-400 border border-gray-300 text-white">
                            <td className="px-2 py-1 border border-gray-300 text-center">10</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">89 - 102</td>
                            <td className="px-2 py-1 border border-gray-300">Tormenta</td>
                            <td className="px-2 py-1 border border-gray-300">
                                Árboles rotos y derribados. Daños estructurales considerables.
                            </td>
                        </tr>
                        <tr className="bg-red-500 border border-gray-300 text-white">
                            <td className="px-2 py-1 border border-gray-300 text-center">11</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">103 - 117</td>
                            <td className="px-2 py-1 border border-gray-300">Tormenta Violenta</td>
                            <td className="px-2 py-1 border border-gray-300">
                                Daños generalizados a estructuras y vegetación.
                            </td>
                        </tr>
                        <tr className="bg-red-600 border border-gray-300 text-white">
                            <td className="px-2 py-1 border border-gray-300 text-center">12</td>
                            <td className="px-2 py-1 border border-gray-300 text-center">{'> 117'}</td>

                            <td className="px-2 py-1 border border-gray-300">Huracán</td>
                            <td className="px-2 py-1 border border-gray-300">
                                Daños considerables y generalizados a estructuras y vegetación. Violencia.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button
                onClick={atras}
                className=" w-90 mb-5 border border-cyan-700/40 mt-6 px-5 py-2 bg-[#34748f] text-white rounded-md hover:bg-[#5795af] cursor-pointer transition duration-200"
            >
                Volver
            </button>
        </div>
    );
}