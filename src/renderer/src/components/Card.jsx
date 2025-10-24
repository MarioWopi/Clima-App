import { motion } from "motion/react"

function Card() {

    return (
        <div className='flex justify-center items-center h-screen '>
            <div className='text-center w-[65vh] h-[85vh]  bg-amber-50/60  rounded-xl border-12 border-[#000000]/62 z-1 shadow-[#fdfdfe9c] shadow-2xl -mt-10'>
                {/* <h1 className='text-center mt-5 text-[30px] font-bold bg-clip-tex text-[#e9642a] drop-shadow-amber-100 text-shadow-lg text-shadow-[#440a0aa5]' >Hoy está Soleado!</h1> */}

                <div >
                    <h2 className="text-[70px] leading-none mt-10">20º</h2>
                    <h3 className="text-[30px] leading-none">Barcelona</h3>
                </div>



                <div>
                    Card Secundaria pronostico 5 dias
                </div>
            </div>
        </div>
    )

}

export default Card;