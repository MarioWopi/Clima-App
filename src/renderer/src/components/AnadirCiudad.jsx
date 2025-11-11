import { useNavigate } from "react-router-dom";
function AnadirCiudad() {


    const navigate = useNavigate();
    const volver = () => {
        navigate("/");
    }


    return (

        <div className="bg-[#858585] w-screen h-screen flex flex-col p-5" >
            <h1 className="text-white text-3xl">GESTIONAR CIUDADES</h1>

            <form class="w-full mt-3">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Barcelona..." />
                </div>
            </form>

            <h2 className="text-[#a6fff0] text-2xl underline underline-offset-4 mt-4">Ubicaciónes actuales</h2>
            <div className="flex w-full h-20 rounded-md border shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)] bg-[#65C1E9] justify-between items-center px-5">
                <div className="text-center">
                    <h3 className="text-lg">
                        Barcelona
                    </h3>
                    <p className="text-gray-600">
                        Nublado
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="text-gray-200 text-xl">
                        20ºC
                    </h3>
                    <p className="text-gray-200">
                        31ºC / 23ºC
                    </p>
                </div>

            </div>
            <button onClick={volver}>Volver</button>
        </div>
    );


}

export default AnadirCiudad;