
export default function BotonesClima({ icono, texto }) {
    return (
        <button className="bg-white/40 transition duration-300 hover:bg-white/70 hover:scale-110 hover:cursor-pointer  px-3 py-1 rounded flex content-center items-center w-full">
            <img className="size-10 mr-2" src={`public/${icono}.png`} alt={`Icono de ${icono}`} />
            <p className="w-full">{texto}</p>
        </button>
    );

}