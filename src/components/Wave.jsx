import Image from "next/image"
import Wave from "../../public/img/Wave/Wave.svg"

const WaveSection = () => {
  return (
    <section className="w-full flex items-center justify-center">
        <Image src={Wave} alt="wave" className="w-full absolute bg-cover" />
    </section>
  )
}

export default WaveSection