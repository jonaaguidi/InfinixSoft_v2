import Image from "next/image";
import Planeta from "../../public/img/About/Planet.png"

const PlanetaImage = () => {

    return (
        <div className="relative z-0">
            <div className="absolute inset-0">
                <div className="rounded-full bg-[#DB3957] blur-[96px] opacity-25 w-full h-full"></div>
            </div>
            <Image className="scale-[1.4] z-50" src={Planeta} alt="Planet" width={600} height={600} />
        </div>
    )
}

export default PlanetaImage;