import Image from "next/image";
import ParticleBg from "./ParticleBg";


const HeadDesc = ({ text, title, desc }) => {
    return (
        <div className="text-center py-16 text-white
        grid gap-4 relative bg-gradient-to-r from-cyan-700 to-blue-600">
            {/* <ParticleBg /> */}
            {/* <Image 
                src={imgProp}
                className='absolute top-0 md:top-[0px] left-0 right-0 mx-auto opacity-10'
                alt="img-text"
            /> */}
            <h2 className="text-2xl lg:text-8xl uppercase lg:absolute bottom-0 left-0 right-0 lg:top-[100px]
            top-[10px] opacity-20 font-bold">
                {text}
            </h2>

            <h2 className="text-5xl text-center font-bold">
                {title}
            </h2>

            <p className="lg:w-[650px] mx-auto text-slate-50 lg:px-0 px-2 z-10
            text-lg">
            {desc}
            </p>
        </div>
    )
}

export default HeadDesc