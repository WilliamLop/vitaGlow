import Image from "next/image";
import ParticleBg from "./ParticleBg";


const HeadDesc = ({ imgProp, title, desc }) => {
    return (
        <div className="text-center py-16 text-white
        grid gap-4 relative">
            <ParticleBg />
            <Image 
                src={imgProp}
                className='absolute top-0 md:top-[0px] left-0 right-0 mx-auto opacity-10'
                width={800}
                height={200}
                alt="img-text"
            />

            <h2 className="text-5xl text-center font-bold">
                {title}
            </h2>

            <p className="lg:w-[650px] mx-auto text-gray-300/80 lg:px-0 px-2
            text-lg">
            {desc}
            </p>
        </div>
    )
}

export default HeadDesc